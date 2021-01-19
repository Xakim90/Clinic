import React from 'react';
import ContentHeader from './ContentComponents/ContentHeader';
// import ContentMain from './Components/ContentMain';
import ContentContainer from './ContentComponents/ContentMain';

class Content extends React.Component {
    render() {
        return (
            <div>
                <ContentHeader/>
                <ContentContainer/>
                {/* <ContentMain/> */}
            </div>


        )
    }
}

export default Content;