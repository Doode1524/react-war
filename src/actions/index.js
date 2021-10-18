import axios from "axios";
import { GET_DECK, GET_P2_CARDS, GET_P1_CARDS } from "./types";

export const getDeck = () => async (dispatch) => {
  const response = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  dispatch({ type: GET_DECK, payload: response.data });
};

export const getCards = (id) => async (dispatch) => {
  const response = await axios.get(
    `https://deckofcardsapi.com/api/deck/${id}/draw/?count=52`
  );
  let p1Cards = [];
  let p2Cards = [];
  let cards = response.data.cards;

  for (let i = 0; i < cards.length; i++) {
    setValue(cards[i]);
    if (i % 2 === 0) {
      p2Cards.push(cards[i]);
    } else {
      p1Cards.push(cards[i]);
    }
  }

  dispatch({ type: GET_P1_CARDS, payload: p1Cards });
  dispatch({ type: GET_P2_CARDS, payload: p2Cards });
};

const setValue = (card) => {
  if (card.value === "JACK") card.value = "11";
  if (card.value === "QUEEN") card.value = "12";
  if (card.value === "KING") card.value = "13";
  if (card.value === "ACE") card.value = "14";
};
