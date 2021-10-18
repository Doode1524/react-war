import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeck, getCards } from "./actions";

function App() {
  const dispatch = useDispatch();

  const deck = useSelector((state) => state.deck);
  const loading = useSelector((state) => state.loading);
  const p1Cards = useSelector((state) => state.p1Cards);
  const p2Cards = useSelector((state) => state.p2Cards);

  useEffect(async () => {
    if (loading === false) {
      dispatch(getCards(deck.deck_id));
    } else {
      dispatch(getDeck());
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(p2Cards, '1')
  console.log(p1Cards, '2')

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
