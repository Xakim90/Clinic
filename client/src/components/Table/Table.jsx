import React from 'react';
import TableMaterial from './TableMaterial';
import LinearIndeterminate from '../Progress/LinearIndeterminate';
import { clientAPI } from '../../actions/api';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Table extends React.Component {
  
  componentDidMount() {
    this.props.getClientsFetch();
  }
  
  render() {
    return (
      <>
        {!this.props.initialized ? (
          null
          // window.history.pushState({ foo: 'bar' }, 'Signin', '/signin')
        ) : (
          <>
            {!this.props.loaded ? (
              <LinearIndeterminate />
            ) : (
              <TableMaterial
                clientPostFetch={this.props.clientPostFetch}
                getClientsFetch={this.props.getClientsFetch}
                removeClient={this.props.removeClient}
                updateClient={this.props.updateClient}
                clients={this.props.clients}
              />  
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
  clientPostFetch: (clientInfo) => dispatch(clientAPI.clientPostFetch(clientInfo)),
  removeClient: (id) => dispatch(clientAPI.removeClient(id)),
  updateClient: (newData) => dispatch(clientAPI.updateClient(newData)),
});

const TableContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Table);


export default TableContainer;