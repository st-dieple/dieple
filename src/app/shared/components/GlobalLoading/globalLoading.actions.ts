import * as types from '@app/shared/constant/types';

export const setLoading = (data: boolean) => {
  return {
    type: types.SET_LOADING,
    payload: data
  }
};
