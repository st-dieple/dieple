import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import * as types from '@app/shared/constant/types';
import { AnyAction } from 'redux';
import { APIService, ENDPOINT } from '@app/shared/helpers/api/api.helper';
import { setLoading } from '@app/shared/components/GlobalLoading/globalLoading.actions';

const http = new APIService();

export function* getListCategories() {
  yield put(setLoading(true));
  const res = yield http.get([ENDPOINT.categories.index])
    .then(response => response);
  yield put({ type: types.GET_LIST_CATEGORIES_DONE, payload: res });
  yield put(setLoading(false));
}

export function* watchCategory() {
  yield takeLatest(types.GET_LIST_CATEGORIES, getListCategories);
}
