import {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  APPARREL_API_ERROR,
  HIT_WHISLIST,
  ADD_WHISLIST,
  REMOVE_WHISLIST,
  HIT_CART,
  ADD_CART,
  REMOVE_CART,
  HIT_APPARREL_COUNT,
  ADD_APPARREL_COUNT,
  REMOVE_APPARREL_COUNT,
  HIT_USER_ORDER_DETAILS,
  ADD_USER_ORDER_DETAILS,
  HIT_ADDRESS,
  ADD_ADDRESS,
  REMOVE_ADDRESS,
  HIT_ORDER,
  ADD_ORDER,
  OPEN_SIGN_UP_MODAL,
  CHANGE_SIGN_UP_MODAL,
  HIT_LOADER,
  CHANGE_LOADER_BOOL,
} from '../types';

export const storeData = (data) => ({
  type: RECEIVE_API_DATA,
  payload: data,
});

export const requestData = () => ({
  type: REQUEST_API_DATA,
});

export const storeError = (data) => ({
  type: APPARREL_API_ERROR,
  payload: data,
});

export const hitWhislist = (data) => ({
  type: HIT_WHISLIST,
  payload: data,
});

export const addWhislist = (data) => ({
  type: ADD_WHISLIST,
  payload: data,
});

export const removeWhislist = (data) => ({
  type: REMOVE_WHISLIST,
  payload: data,
});

export const hitCartAddRemove = (data) => ({
  type: HIT_CART,
  payload: data,
});

export const addCart = (data) => ({
  type: ADD_CART,
  payload: data,
});

export const removeCart = (data) => ({
  type: REMOVE_CART,
  payload: data,
});

export const hitAddRemoveApparelCount = (data) => ({
  type: HIT_APPARREL_COUNT,
  payload: data,
});

export const addApparelCount = (data) => ({
  type: ADD_APPARREL_COUNT,
  payload: data,
});

export const removeApparelCount = (data) => ({
  type: REMOVE_APPARREL_COUNT,
  payload: data,
});

export const hitFirebaseApparel = (data) => ({
  type: HIT_USER_ORDER_DETAILS,
  payload: data,
});

export const storeFirebaseApparrel = (data) => ({
  type: ADD_USER_ORDER_DETAILS,
  payload: data,
});

export const hitAddressAddRemove = (data) => ({
  type: HIT_ADDRESS,
  payload: data,
});

export const addAddress = (data) => ({
  type: ADD_ADDRESS,
  payload: data,
});

export const removeAddress = (data) => ({
  type: REMOVE_ADDRESS,
  payload: data,
});

export const hitOrderAdd = (data) => ({
  type: HIT_ORDER,
  payload: data,
});

export const addOrder = (data) => ({
  type: ADD_ORDER,
  payload: data,
});

export const hitOpenSignUp = (data) => ({
  type: OPEN_SIGN_UP_MODAL,
  payload: data,
});

export const changeSignUpBool = (data) => ({
  type: CHANGE_SIGN_UP_MODAL,
  payload: data,
});

export const hitLoader = (data) => ({
  type: HIT_LOADER,
  payload: data
})

export const changeLoader = (data) => ({
  type: CHANGE_LOADER_BOOL,
  payload: data,
})
