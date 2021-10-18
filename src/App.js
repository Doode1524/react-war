import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeck, getCards } from "./actions";
import Cards from "./Cards";

function App() {
  const dispatch = useDispatch();

  const deck = useSelector((state) => state.deck);
  const loading = useSelector((state) => state.loading);
  const p1Cards = useSelector((state) => state.p1Cards);
  const p2Cards = useSelector((state) => state.p2Cards);

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

  console.log(p2Cards, "2");
  console.log(p1Cards, "1");

  return (
    <div>
      <h1>WAR!!</h1>
      <Cards />
    </div>
  );
}

export default App;
