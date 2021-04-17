import { call, put, takeEvery } from "redux-saga/effects";
import { storeData, storeError, addWhislist, removeWhislist } from "./actions";
import { REQUEST_API_DATA, HIT_WHISLIST } from '../types'
import getApparrelData from "./api";

function* getData(action) {
    try {
        const data = yield call(getApparrelData, action.payload);
        yield put(storeData({apparrelData:data}));
    } catch (e) {
        yield put(storeError({error: e.message}));
    }
}

function* whislistData(action) {
    try {
        if (action.payload.actionType === "add") {
            yield put(addWhislist(action.payload.productDetail))
        } else if (action.payload.actionType === "remove") {
            yield put(removeWhislist(action.payload.productDetail))
        }
    } catch (e) {
        yield put(storeError({error: e.message}));
    }
}

export function* watchApparrelData() {
    yield takeEvery(REQUEST_API_DATA, getData);
}

export function* watchWhislistData() {
    yield takeEvery(HIT_WHISLIST, whislistData);
}
