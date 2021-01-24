import React from 'react';
import { getClientsFetch } from '../../../actions/actions';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './ContentMain.module.css';

const data = [
  {
    complaint: 'Аллергический ринит. Головная боль',
    history: 'Желтуха.Аллергический ринит. Головная боль',
  },
];


class ContentMain extends React.Component {
  componentDidMount() {
    this.props.getClientsFetch();
    let client = this.props.clients;
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className={styles.miniCardHeight + ' card mt-2 mb-2'}>
            <div className="card-header py-1 font-weight-bolder">
              Пациенты :
            </div>
            <div className="card-body overflow-auto mb-2">
              {this.props.clients.map((patient, index) => (
                <p
                  key={index}
                  className="card-text font-weight-bolder cursor-pointer hover:text-blue-900"
                >
                  {patient.name}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.miniCardHeight + ' card mt-1 mb-1'}>
            <div className="card-header py-1 font-weight-bolder">
              История болезни :
            </div>
            <div className="card-body overflow-auto">
              {data.map((patient, index) => (
                <p key={index} className="card-text font-weight-bolder">
                  {patient.history}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className={styles.cardHeight + ' card mt-2 mb-1'}>
            <div className="card-header py-1 font-weight-bolder">Plan</div>
            <div className="card-body overflow-auto">
              <p className="card-text font-weight-bolder">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis sit, error aliquid, facere voluptatum eveniet
                deserunt itaque quas aliquam temporibus rerum unde natus
                explicabo numquam voluptate. Voluptas dolorum voluptate maiores.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis sit, error aliquid, facere voluptatum eveniet
                deserunt itaque quas aliquam temporibus rerum unde natus
                explicabo numquam voluptate. Voluptas dolorum voluptate maiores.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 bordered">
          <div className={styles.cardHeight + ' card mt-2 mb-1'}>
            <div className="card-header py-1 font-weight-bolder">Plan</div>
            <div className="card-body overflow-auto">
              <p className="card-text font-weight-bolder">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis sit, error aliquid, facere voluptatum eveniet
                deserunt itaque quas aliquam temporibus rerum unde natus
                explicabo numquam voluptate. Voluptas dolorum voluptate maiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    clients: state.clientsReducer.clients,
    loaded: state.clientsReducer.loaded,
});

const mapDispatchToProps = (dispatch) => ({
  getClientsFetch: () => dispatch(getClientsFetch())
});

const ContentContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ContentMain);

// const ClinicApp = (props) => {
//   return (
//     <BrowserRouter>
//       <Provider store={store}>
//         <AppContainer />
//       </Provider>
//     </BrowserRouter>
//   );
// };

// export default ClinicApp;

export default ContentContainer;
