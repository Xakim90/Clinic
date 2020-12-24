import React from 'react';
import axios from 'axios';

class My extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/users')
            .then(response => {
                if (response.status === 200 && response != null) {
                    this.setState({
                        data: response.data
                    });
                } else {
                    console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="home">
                {Array.isArray(data) && data.map(object => (
                    <p key={object.uid}>{object.title}</p>
                ))}
            </div>
        )
    }
}

export default My;