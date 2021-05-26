import { LOGIN, HITLOGIN, LOGOUT, HITLOGOUT, HITFORGOTMPIN, LOGINERROR } from  '../types'

export const storeToken = data =>
    ({
      type: LOGIN,
      payload: data
    });

export const storeError = data =>
    ({
      type: LOGINERROR,
      payload: data
    });

export const hitLogin = data =>
    ({
      type: HITLOGIN,
      payload: data
    });

export const appLogout = () =>
    ({
      type: LOGOUT
    });

export const hitLogout = () =>
    ({
      type: HITLOGOUT
    });

export const hitForgotMpin = data =>
    ({
      type: HITFORGOTMPIN,
      payload: data
    })
