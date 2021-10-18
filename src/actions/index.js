import axios from 'axios'
import { GET_DECK, GET_CARDS } from './types'

export const getDeck = () => async (dispatch) => {
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    dispatch({type: GET_DECK, payload: response.data})
}

export const getCards = (id) => async (dispatch) => {
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=52`)
    console.log(response.data, 'deck')
    dispatch({type: GET_CARDS, payload: response.data})
}