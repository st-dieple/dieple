import * as types from '@app/shared/constant/types';

const initialState = {
  list: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_LIST_CATEGORIES_DONE: {
      return {
        ...state,
        list: payload
      };
    }

    default:
      return state;
  }
}
