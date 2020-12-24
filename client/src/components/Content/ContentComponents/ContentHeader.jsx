import React from 'react';
import styles from './ContentHeader.module.css'

const contentdata = {
    patientId: '3131551',
    dos: '2019',
    facility: 'Office-Office-Home-Visits',
    provider: 'Achi, Traci FNP',
}

class ContentHeader extends React.Component {
    render() {
        return (
            <>
                <div className="row">

                    <div className="col-md-3">
                        <h6 className="font-weight-bold">ID: <span className="font-weight-normal">{contentdata.patientId}</span></h6>
                        <h6 className="font-weight-bold">DOS: <span className="font-weight-normal">{contentdata.dos}</span></h6>
                    </div>

                    <div className="col-md-5">
                        <h6 className="font-weight-bold">Facility: <span className="font-weight-normal">{contentdata.facility}</span></h6>
                        <h6 className="font-weight-bold">Provider: <span className="font-weight-normal">{contentdata.provider}</span></h6>
                    </div>

                    <div className="col-md-4">
                        <button className={styles.contentBtn + ' m-2 p-2'}>Attach Documents</button>
                        <button className={styles.contentBtn + ' m-2 p-2'}>Sreenings</button>
                    </div>
                </div>
  
               <div className="d-flex">
                    <span className={styles.spanWidth + ' text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger'}>Patient Status</span>
                    <span className={styles.spanWidth + ' text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger'}>Specialist PCP</span>
                    <span className={styles.spanWidth + ' text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger'}>Quality Measures</span>
                    <span className={styles.spanWidth + ' text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger'}>Patient Education</span>
                    <span className={styles.spanWidth + ' text-center p-2 ml-0 bg-light border-right-1 border-danger'}>Misc</span>
                </div>
            </>
        )
    }
}

export default ContentHeader;