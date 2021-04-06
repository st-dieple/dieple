import * as types from '@app/shared/constant/types';

const initialState = {
  showLoading: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_LOADING: {
      return {
        ...state,
        showLoading: payload
      };
    }
    default:
      return state;
  }
}
