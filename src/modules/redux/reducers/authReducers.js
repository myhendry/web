import { ADD_COUNTER } from "../actions/authActions";

const INITIAL_STATE = {
  counter: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return INITIAL_STATE;
  }
};
