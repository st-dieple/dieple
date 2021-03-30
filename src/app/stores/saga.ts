// redux/root-saga.js
import {all} from 'redux-saga/effects';
import { watchCategory } from '../pages/category/category.saga';
import { watchCart } from '@app/pages/cart/cart.saga';

export default function* saga() {
  yield all([
    watchCategory(),
    watchCart()
  ]);
}
