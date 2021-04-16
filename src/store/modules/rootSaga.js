import { all } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './auth/sagas'
import watchApparrelData from './apparrelData/sagas'

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchApparrelData(),
  ]);
}
