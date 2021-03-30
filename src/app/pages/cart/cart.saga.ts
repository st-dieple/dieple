import {call, put, takeEvery, takeLatest, delay} from 'redux-saga/effects';
import * as types from '@app/shared/constant/types';
import {setLoading} from '@app/shared/components/GlobalLoading/globalLoading.actions';

export function* addCart(data: any) {
  yield put(setLoading(true));
  yield delay(300);
  yield put({ type: types.ADD_CART_SUCCESS, payload: data.payload });
  yield put(setLoading(false));
}

export function* editCart(data: any) {
  yield put(setLoading(true));
  yield delay(300);
  yield put({ type: types.EDIT_CART_SUCCESS, payload: data.payload });
  yield put(setLoading(false));
}

export function* deleteCart(data: any) {
  yield put(setLoading(true));
  yield delay(300);
  yield put({ type: types.DELETE_CART_SUCCESS, payload: data.payload });
  yield put(setLoading(false));
}

export function* watchCart() {
  yield takeEvery(types.ADD_CART, addCart);
  yield takeEvery(types.EDIT_CART, editCart);
  yield takeLatest(types.DELETE_CART, deleteCart);
}
