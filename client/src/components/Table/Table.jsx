import React from 'react';
import TableMaterial from './TableMaterial';
import LinearIndeterminate from '../Progress/LinearIndeterminate';
import {
  getClientsFetch,
  clientPostFetch,
  removeClient,
  updateClient,
} from '../../actions/actions';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Table extends React.Component {
  
  async componentDidMount() {
    {this.props.initialized ?
      await this.props.getClientsFetch()
      : null
    }
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
  getClientsFetch: () => dispatch(getClientsFetch()),
  clientPostFetch: (clientInfo) => dispatch(clientPostFetch(clientInfo)),
  removeClient: (id) => dispatch(removeClient(id)),
  updateClient: ( newData ) => dispatch(updateClient( newData )),
});

const TableContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Table);


export default TableContainer;