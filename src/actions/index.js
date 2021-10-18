import axios from 'axios'
import { GET_DECK } from './types'

export const getDeck = () => async (dispatch) => {
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    dispatch({type: GET_DECK, payload: response.data})
}