import { call, put, takeEvery } from "redux-saga/effects";
import { storeToken, appLogout, storeError } from "./actions";
import { HITLOGIN, HITLOGOUT } from '../types'
import getLoginToken from "./api";

function* getToken(action) {
    try {
        const data = yield call(getLoginToken, action.payload);
        if (data.data.error) {
            yield put(storeError({error: data.data.error}));
        } else {
            yield put(storeToken({token:data.data.data.token, phone_number: action.payload.phone_number}));
        }
    } catch (e) {
        yield put(storeError({error: e.message}));
    }
}

// TODO 
// function* getTokenForgotMpin(action) {
//     try {
//         yield put(storeToken({token:action.payload.token, phone_number: action.payload.phone_number}))
//     } catch (e) {
//     }
// }

function* expireToken() {
    yield put(appLogout());
}

export function* watchLogin() {
    yield takeEvery(HITLOGIN, getToken);
}

export function* watchLogout() {
    yield takeEvery(HITLOGOUT, expireToken);
}

// TODO
// export function* watchForgotMpin() {
//     yield takeEvery(HITFORGOTMPIN, getTokenForgotMpin);
// }