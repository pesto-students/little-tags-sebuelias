import { call, put, takeEvery } from "redux-saga/effects";
import { storeData, storeError } from "./actions";
import { REQUEST_API_DATA } from '../types'
import getApparrelData from "./api";

function* getData(action) {
    try {
        const data = yield call(getApparrelData, action.payload);
        if (data.data.error) {
            yield put(storeError({error: data.error}));
        } else {
            yield put(storeData({apparrelData:data.data}));
        }
    } catch (e) {
        yield put(storeError({error: e.message}));
    }
}


export default function* watchApparrelData() {
    yield takeEvery(REQUEST_API_DATA, getData);
}
