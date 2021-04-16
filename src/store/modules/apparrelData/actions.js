import { REQUEST_API_DATA, RECEIVE_API_DATA, APPARREL_API_ERROR } from  '../types'

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