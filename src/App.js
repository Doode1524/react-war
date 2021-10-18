import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeck, getCards } from "./actions";

function App() {
  const dispatch = useDispatch();
  const deck = useSelector((state) => state.deck);
  const loading = useSelector((state) => state.loading);

  useEffect(async () => {
    if (loading === false) {
      dispatch(getCards(deck.deck_id));
    } else {
      dispatch(getDeck());
    }
  }, [loading]);

  console.log(deck, "deck2");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
