import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeck, getCards } from "./actions";
import Cards from "./Cards";

function App() {
  const dispatch = useDispatch();

  const deck = useSelector((state) => state.deck);
  const loading = useSelector((state) => state.loading);

  useEffect(async () => {
    if (loading === false) {
      await dispatch(getCards(deck.deck_id));
    } else {
      await dispatch(getDeck());
    }
  }, [deck]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>WAR!!</h1>
      <Cards />
    </div>
  );
}

export default App;
