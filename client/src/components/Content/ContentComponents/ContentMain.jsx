import React from 'react';
import styles from './ContentMain.module.css'

class ContentMain extends React.Component {
    render() {
        return (

            <div className="row">

                <div className="col-md-3">
                    <div className={styles.miniCardHeight + ' card mt-2 mb-1'}>
                        <div className="card-header py-1 font-weight-bolder">
                            Chief Complaint
                        </div>
                        <div className="card-body overflow-auto">
                            <p className="card-text font-weight-bolder">
                                Physical exam. EKG SML Allergic rhinits. Watery /Itchy  Eyes
                                </p>

                        </div>
                    </div>
                    <div className={styles.miniCardHeight + ' card mt-1 mb-1'}>
                        <div className="card-header py-1 font-weight-bolder">
                            HPI
                        </div>
                        <div className="card-body overflow-auto">
                            <p className="card-text font-weight-bolder">
                                Physical exam. EKG SML Allergic rhinits. Watery /Itchy  Eyes
                                </p>

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={styles.cardHeight + ' card mt-2 mb-1'}>
                        <div className="card-header py-1 font-weight-bolder">
                            Plan
                        </div>
                        <div className="card-body overflow-auto">
                            <p className="card-text font-weight-bolder">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt 
                                itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. 
                                Voluptas dolorum voluptate maiores.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt 
                                itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. 
                                Voluptas dolorum voluptate maiores.
                                </p>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 bordered">

                <div className={styles.cardHeight + ' card mt-2 mb-1'}>
                        <div className="card-header py-1 font-weight-bolder">
                            Plan
                        </div>
                        <div className="card-body overflow-auto">
                            <p className="card-text font-weight-bolder">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt 
                                itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. 
                                Voluptas dolorum voluptate maiores.
                                </p>

                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

export default ContentMain;