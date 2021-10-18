import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Cards = () => {
  const p1Cards = useSelector((state) => state.p1Cards);
  const p2Cards = useSelector((state) => state.p2Cards);
  const [p1Top, setP1Top] = useState({});
  const [p2Top, setP2Top] = useState({});

  useEffect(() => {

  }, [])

  const handlePlayclick = () => {
    if (p1Cards.length > 0 && p2Cards.length > 0) {
      setP1Top(p1Cards.pop());
      setP2Top(p2Cards.pop());
    }
  };

  return (
    <div>
      <button onClick={handlePlayclick}>Play</button>
      <div>
        <h3>Player 1 Cards</h3>
        {p1Top.image ? <img src={p1Top.image} /> : null}
      </div>
      <div>
        <h3>Player 2 Cards</h3>
        {p2Top.image ? <img src={p2Top.image} /> : null}
      </div>
    </div>
  );
};

export default Cards;
