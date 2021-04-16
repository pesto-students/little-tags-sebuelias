import { put, takeEvery } from "redux-saga/effects";
import { storeToken, appLogout, storeError } from "./actions";
import { HITLOGIN, HITLOGOUT } from '../types'
// import getLoginToken from "./api";

function* getToken(action) {
    try {
        yield put(storeToken({auth : action.payload}));
    } catch (e) {
        yield put(storeError({error: e.message}));
    }
}

function* expireToken() {
    yield put(appLogout());
}

export function* watchLogin() {
    yield takeEvery(HITLOGIN, getToken);
}

export function* watchLogout() {
    yield takeEvery(HITLOGOUT, expireToken);
}
