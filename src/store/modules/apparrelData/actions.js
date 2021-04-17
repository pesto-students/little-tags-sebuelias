import { REQUEST_API_DATA, RECEIVE_API_DATA, APPARREL_API_ERROR,
  HIT_WHISLIST, ADD_WHISLIST, REMOVE_WHISLIST } from  '../types'

export const storeData = data =>
    ({
      type: RECEIVE_API_DATA,
      payload: data
    });

export const requestData = () =>
    ({
      type: REQUEST_API_DATA
    });

export const storeError = data =>
    ({
      type: APPARREL_API_ERROR,
      payload: data
    });

export const hitWhislist = data =>
    ({
      type: HIT_WHISLIST,
      payload: data
    });

export const addWhislist = data =>
    ({
      type: ADD_WHISLIST,
      payload: data
    });

export const removeWhislist = data =>
    ({
      type: REMOVE_WHISLIST,
      payload: data
    });
