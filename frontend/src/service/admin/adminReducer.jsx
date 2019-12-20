import _ from 'lodash';
import { GET_ADMINS, GET_ONE_ADMIN, UNLOCKED_ADMIN } from './adminActionTypes';
import composePagination from '../../utils/pagination';

const defaultState = {
  data: {},
  hasError: false,
  isPending: false,
  paginations: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_ADMINS: {
      if (action.meta && action.meta.isPending) {
        return state;
      }
      if (action.error) {
        return { ...state, hasError: true };
      }
      const paginations = composePagination(
        action.meta.headers,
        action.meta.params
      );
      return {
        data: _.keyBy(action.payload, 'id'),
        hasError: false,
        isPending: action.meta.isPending,
        paginations,
      };
    }

    case GET_ONE_ADMIN:
    case UNLOCKED_ADMIN: {
      if (action.meta && action.meta.isPending) {
        return state;
      }
      if (action.error) {
        return { ...state, hasError: true };
      }
      return {
        ...state,
        data: { ...state.data, [action.payload.id]: action.payload },
        hasError: false,
        isPending: action.meta.isPending,
      };
    }

    default:
      return state;
  }
};
