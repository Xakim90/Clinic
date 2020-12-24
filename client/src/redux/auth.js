const initialState = {
    currentUser: {},
    initialized: false,
  }
  
  export default function authReducer(state = initialState, action) {
      switch (action.type) {
        case 'INITIALIZED_SUCCESS':
          return {
            ...state, 
            currentUser: action.payload,
            initialized: true

          }
        case 'LOG_OUT':
          return {
            ...state,
            currentUser: {},
            initialized: false,

          }

        default:
          return state;
      }
    }