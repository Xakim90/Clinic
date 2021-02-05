import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './ContentMain.module.css';
import LinearIndeterminate from '../../Progress/LinearIndeterminate';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { clientAPI } from '../../../actions/api';
import SimpleModal from '../../Modal/SimpleModal';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

let body = document.getElementsByTagName('body');
let isNotEmptyHistory = false;
let isOpen = false;

class ContentMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      status: '',
      birthYear: '',
      birthCity: '',
      clientData: [
        {
          history: '',
        },
      ],
      _id: '',
    };
  }
  componentDidMount() {
    this.props.getClientsFetch();
  }

  clearState() {
    this.setState({
      name: '',
      surname: '',
      status: '',
      birthYear: '',
      birthCity: '',
      clientData: [{ history: '' }],
      _id: '',
    });
  }
  submit = (e) => {
    e.preventDefault();
    this.props.updateClient(this.state);
    this.clearState();
  };
  handleChange = (e) => {
    this.setState({
      clientData: [
        {
          history: e.target.value,
        },
      ],
    });
  };
  setClientHistory = (e) => {
    e.preventDefault();
    let clients = this.props.clients;
    let id = e.currentTarget.getAttribute('data-id');
    clients.map((client, index) => {
      if (client._id === id) {
        this.setState({
          name: client.name,
          surname: client.surname,
          status: client.status,
          birthYear: client.birthYear,
          birthCity: client.birthCity,
          clientData: client.clientData,
          _id: client._id,
        });
        if (client.clientData[0] !== undefined) {
          this.isNotEmptyHistory = true;
        }else {
          this.isNotEmptyHistory = false;
        }
      }
    });
  };
  setOpen = () => {
    isOpen = true;
    // console.log(isOpen)
  };
  handleClose = () => {
    isOpen = false;
    // console.log(isOpen);
  };

  render() {
    return (
      <>
        {!this.props.initialized ? null : (
          // window.history.pushState({ foo: 'bar' }, 'Signin', '/signin')
          <>
            {!this.props.loaded ? (
              <LinearIndeterminate />
            ) : (
              <>
                <div className="row">
                  <div className="col-md-4">
                    <div className={styles.cardHeight + ' card mt-2 mb-1'}>
                      <div className="card-header text-lg py-1 font-weight-bolder">
                        Выберите пациента для просмотра и изменения истории
                        болезней:
                      </div>
                      <div className="card-body overflow-auto mb-2">
                        {this.props.clients.map((patient, index) => (
                          <p
                            key={index}
                            data-id={patient._id}
                            onClick={(e) => this.setClientHistory(e)}
                            className="font-weight-bolder text-base cursor-pointer hover:text-red-500"
                          >
                            {patient.name + ' ' + patient.surname}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.cardHeight + ' card mt-2 mb-1'}>
                      <div className="card-header py-1 text-lg font-weight-bolder">
                        История болезни пациента
                      </div>
                      <div className="card-body overflow-auto">
                        {this.state.name === '' ? null : (
                          <span className="font-weight-bolder text-lg text-red-500">
                            Пациент:{' '}
                          </span>
                        )}
                        <span
                          className="font-weight-bolder text-base"
                          id="currentClient"
                        >
                          {this.isNotEmptyHistory
                            ? this.state.name + ' ' + this.state.surname
                            : null}
                        </span>
                        <br />
                        <p
                          className="font-weight-bolder text-base"
                          id="currentClientHistory"
                        >
                          {this.isNotEmptyHistory
                            ? this.state.clientData[0].history
                            : null}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 bordered">
                    <div className={styles.cardHeight + ' card mt-2 mb-1'}>
                      <div className="card-header py-1 font-weight-bolder text-lg">
                        Новое назначение
                      </div>
                      <div className="card-body overflow-auto">
                        {this.state.name === '' ? null : (
                          <span className="text-lg font-weight-bolder text-red-500">
                            Диагноз для пациента -{' '}
                          </span>
                        )}
                        <span
                          className="font-weight-bolder text-base"
                          id="diagnos"
                        >
                          {this.state.name + ' ' + this.state.surname}
                        </span>
                        <form onSubmit={this.submit}>
                          {this.state.name !== '' ? (
                            <>
                              <TextareaAutosize
                                name="history"
                                onChange={this.handleChange}
                                className="w-full"
                                aria-label="minimum height"
                                rowsMin={3}
                                placeholder="Введите текст"
                              />
                              <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                size="small"
                                startIcon={<SaveIcon />}
                              >
                                Сохранить
                              </Button>
                            </>
                          ) : null}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients,
  loaded: state.clientsReducer.loaded,
  initialized: state.authReducer.initialized,
});

const mapDispatchToProps = (dispatch) => ({
  getClientsFetch: () => dispatch(clientAPI.getClientsFetch()),
  updateClient: (newData) => dispatch(clientAPI.updateClient(newData)),
});

const ContentContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ContentMain);

export default ContentContainer;
