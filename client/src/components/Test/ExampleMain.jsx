import React from 'react';
import Clock from './Clock';
import Example1 from './Example1';

class ExampleMain extends React.Component {
  render() {
    return (
      <>
        <div className="flex">
          <Clock />
          <Example1 />
        </div>
      </>
    );
  }
}

export default ExampleMain;
