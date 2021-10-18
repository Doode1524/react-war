import { GET_DECK } from "../actions/types";

const INITIAL_STATE = {
  deck: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DECK:
      return { ...state, deck: action.payload };
    default:
      return state;
  }
};
