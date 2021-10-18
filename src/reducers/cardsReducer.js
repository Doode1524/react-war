import { GET_DECK, GET_P1_CARDS, GET_P2_CARDS } from "../actions/types";

const INITIAL_STATE = {
  deck: null,
  loading: true,
  p1Cards: [],
  p2Cards: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DECK:
      return { ...state, deck: action.payload, loading: false };
    case GET_P1_CARDS:
      return { ...state, p1Cards: action.payload };
    case GET_P2_CARDS:
      return { ...state, p2Cards: action.payload };
    default:
      return state;
  }
};
