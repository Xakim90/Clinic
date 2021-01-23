import { addMessageCreator } from '../../redux/dialogs-reducer';
import Table from './Table';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    clients: state.clientsReducer.clients,
    loaded: state.clientsReducer.loaded,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      dispatch(addMessageCreator(newMessageBody));
    },
  };
};

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

export default TableContainer;
