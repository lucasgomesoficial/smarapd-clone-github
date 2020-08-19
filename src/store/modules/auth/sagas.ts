import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { username, password } = payload;

    const { data } = yield call(api.post, '', { username, password });

    yield put(actions.signInSuccess({ login: data.login }));
  } catch (err) {
    yield put(actions.signInFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
])