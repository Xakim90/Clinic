const initialState = {
    clients: [],
    loaded: false
  }
  
  export default function clientsReducer(state = initialState, action) {
      switch (action.type) {
        case 'LOADED_SUCCESS':
          return {
            ...state,
            clients: action.payload,
            loaded: true,
          };
        case 'REMOVE_LOADED_CLIENTS':
          return {
            ...state,
            clients: [],
            loaded: false,
          };

        default:
          return state;
      }
    }