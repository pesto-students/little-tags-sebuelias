import { RECEIVE_API_DATA, APPARREL_API_ERROR, ADD_WHISLIST, REMOVE_WHISLIST, ADD_CART, REMOVE_CART, ADD_APPARREL_COUNT,
  ADD_USER_ORDER_DETAILS} from  '../types'

const INITIAL_STATE = {
  apparrelData: null,
  whisList: [],
  cart: [],
  orderHistory: [],
  addressSaved: [],
  };

let checkDuplicate;

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
      case ADD_USER_ORDER_DETAILS:
           return {...state, ...action.payload };
      case ADD_CART:
          checkDuplicate = state.cart.filter((obj) => obj.id === action.payload.id && obj.size === action.payload.size)
          if (checkDuplicate.length) {
            state.cart.forEach((cartObj) => {
              if (cartObj.id === action.payload.id && cartObj.size === action.payload.size){
                cartObj.quantity += action.payload.quantity
              }
            });
            return {...state, cart: state.cart};
          }
          return {...state, cart: [...state.cart, action.payload]};
      case REMOVE_CART:
          state.cart.splice(action.payload, 1);
          return {...state, cart: state.cart };
      case ADD_APPARREL_COUNT:
          state.cart[action.payload.index].quantity = action.payload.quantity
          return {...state, cart: state.cart };
      default:
          return state;
  }
}
