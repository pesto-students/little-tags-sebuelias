import { RECEIVE_API_DATA, APPARREL_API_ERROR, ADD_WHISLIST, REMOVE_WHISLIST } from  '../types'

const INITIAL_STATE = {
  apparrelData: null,
  whisList: [],
  };

// auth reducer
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
      case APPARREL_API_ERROR:
          return {...state, error: action.payload.error };
      case RECEIVE_API_DATA:
          return {...state, apparrelData: action.payload.apparrelData };
      case ADD_WHISLIST:
          return {...state, whisList: [...state.whisList, action.payload]};
      case REMOVE_WHISLIST:
          state.whisList = state.whisList.filter(({id}) => id !== action.payload.id);
          return {...state, whisList: state.whisList };
      default:
          return state;
  }
}
