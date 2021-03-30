import * as types from '@app/shared/constant/types';

export const addCart = (data: any) => {
  return {
    type: types.ADD_CART,
    payload: data
  }
};

export const editCart = (data: any) => {
  return {
    type: types.EDIT_CART,
    payload: data
  }
};

export const deleteCart = (data: any) => {
  return {
    type: types.DELETE_CART,
    payload: data
  }
};
