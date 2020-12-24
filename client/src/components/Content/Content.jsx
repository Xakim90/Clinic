import React from 'react';
import ContentHeader from './ContentComponents/ContentHeader';
import ContentMain from './ContentComponents/ContentMain';

class Content extends React.Component {
    render() {
        return (
            <div>
                <ContentHeader/>
                <ContentMain/>
            </div>


        )
    }
}

export default Content;