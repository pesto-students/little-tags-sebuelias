import { RECEIVE_API_DATA, APPARREL_API_ERROR } from  '../types'

const INITIAL_STATE = {
  apparrelData: null
  };

// auth reducer
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
      case APPARREL_API_ERROR:
          return {...state, error: action.payload.error };
      case RECEIVE_API_DATA:
          return {...state, apparrelData: action.payload.apparrelData };
      default:
          return state;
  }
}
