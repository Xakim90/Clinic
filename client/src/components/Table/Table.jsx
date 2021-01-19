import React from 'react';
import TableMaterial from './TableMaterial';
import { getClientsFetch, clientPostFetch } from '../../actions/actions';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Table extends React.Component {
  constructor(props) {
    super(props);
    // this.state = [...this.props.clients];
  }
  componentDidMount() {
    this.props.getClientsFetch();
  }
  render() {
    return (
      <>
        <TableMaterial
          clientPostFetch={this.props.clientPostFetch}
          getClientsFetch={this.props.getClientsFetch}
          clients={this.props.clients}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients,
  loaded: state.clientsReducer.loaded,
});

const mapDispatchToProps = (dispatch) => ({
  getClientsFetch: () => dispatch(getClientsFetch()),
  clientPostFetch: (clientInfo) => dispatch(clientPostFetch(clientInfo)),
});

const TableContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Table);


export default TableContainer;