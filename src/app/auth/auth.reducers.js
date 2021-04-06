import * as types from '@app/shared/constant/types';

const initialState = {
  currentUser: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };

    default:
      return state;
  }
}
