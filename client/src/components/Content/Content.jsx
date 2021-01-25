import React from 'react';
import ContentHeader from './ContentComponents/ContentHeader';
// import ContentMain from './Components/ContentMain';
import ContentContainer from './ContentComponents/ContentMain';

class Content extends React.Component {
    render() {
        return (
            <div>
                
                <ContentContainer/>
                {/* <ContentMain/> */}
            </div>


        )
    }
}

export default Content;