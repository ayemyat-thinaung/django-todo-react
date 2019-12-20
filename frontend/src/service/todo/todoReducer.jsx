import _ from "lodash";
import { GET_TODOS, UPDATE_TODO } from "./todoActionTypes";
// import composePagination from '../../utils/pagination';

const defaultState = {
  data: {},
  hasError: false,
  isPending: false,
  paginations: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_TODOS: {
      if (action.meta && action.meta.isPending) {
        return state;
      }
      if (action.error) {
        return { ...state, hasError: true };
      }
      // const paginations = composePagination(
      //   action.meta.headers,
      //   action.meta.params
      // );
      return {
        data: _.keyBy(action.payload, "id"),
        hasError: false,
        isPending: action.meta.isPending
        // paginations,
      };
    }

    case UPDATE_TODO: {
      if (action.meta && action.meta.isPending) {
        return state;
      }
      if (action.error) {
        return { ...state, hasError: true };
      }

      return {
        ...state,
        data: { ...state.data, ..._.keyBy([action.payload], "id") },
        hasError: false,
        isPending: action.meta.isPending
      };
    }
    default:
      return state;
  }
};
