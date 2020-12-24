import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    
    render() {

        return (
            <div className="container-fluid">
                
                <div className="row bg-primary pt-2">
                    <div className="col-4 font-weight-bold">

                         {/* {this.props.persons.map((person, index)=>{
                            return <div key={index} className="text-bold">Doctor: {person.name} <span className="font-weight-bold"></span></div> 
                        })} */}
                    </div>

                    <div className="col-4">
                        <h6 className="text-center font-weight-bold"><span className="font-weight-bold"></span> : Patient</h6>
                    </div>

                    <div className="col-4">
                        {this.props.initialized
                            ? <button onClick={this.props.logout} className="btn btn-sm btn-light float-right">Log Out</button>
                            : <div>
                                <Link to="/signin" className="btn btn-sm float-right btn-light">signin</Link>
                                <Link to="/signup" className="btn btn-sm float-right btn-light">signup</Link>
                            </div>
                        }
                    </div>
                </div>

                <div className="row bg-dark pt-2 pb-2">
                    <div className="col-2">
                        <div className="row">
                            <div className="col-6 text-white">Icon</div>
                            <div className="col-6 text-white">Menu</div>
                        </div>
                    </div>

                    <div className="col-2 offset-8">
                        <span className="text-white font-weight-bold">Icon </span>
                        <span className="text-white font-weight-bold">Show Hide Docs</span>
                    </div>

                </div>

                <div className="row bg-light">
                    <div className="col-md-4">
                        <button className="btn btn-danger">Verify/Update Medications</button>
                    </div>

                    <div className="col-md-5 offset-3 pt-2">

                        <button className= "btn btn-sm btn-light">123</button>

                        <button className="btn btn-sm btn-light">icon</button>

                        <button className="btn btn-sm btn-light">icon</button>

                        <button className="btn btn-sm btn-light">icon</button>

                        <button className="btn btn-sm btn-light">icon</button>

                    </div>
                </div>

            </div>
        )
    }
}

export default Header;

