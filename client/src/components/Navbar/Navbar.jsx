import React from 'react';
import Vitails from './Navbar-items/Vitails';
import PatientAlerts from './Navbar-items/Patient-Alerts';


class Navbar extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {
                                this.props.initialized && this.props.currentUser !== null && this.props.currentUser !== {}
                                    ?
                                    (
                                        <div>
                                            <h4 className="font-weight-bold text-center pt-2 mb-3">
                                                {
                                                    this.props.currentUser.username
                                                }
                                            </h4>
                                            <h4 className="font-weight-bold text-center pt-2 mb-3">
                                                {
                                                    this.props.currentUser.username
                                                }
                                            </h4>
                                            < Vitails />
                                            <PatientAlerts />
                                        </div>
                                    )
                                    : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;