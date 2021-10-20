import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Cards = () => {
  const p1Cards = useSelector((state) => state.p1Cards);
  const p2Cards = useSelector((state) => state.p2Cards);

  const [hand, setHand] = useState({});
  const [handWinner, setHandWinner] = useState("");

  useEffect(() => {
    checkWinningHand(hand);
    console.log(p1Cards, "p1");
    console.log(p2Cards, "p2");
  }, [hand]);

  const checkWinningHand = (hand) => {
    if (hand.p1 && hand.p2) {
      if (parseInt(hand.p1.value) > parseInt(hand.p2.value)) {
        setHandWinner("Player 1");
        p1Cards.unshift(hand.p1);
        p1Cards.unshift(hand.p2);
      }
      if (parseInt(hand.p1.value) < parseInt(hand.p2.value)) {
        setHandWinner("Player 2!!");
        p2Cards.unshift(hand.p1);
        p2Cards.unshift(hand.p2);
      }
      if (parseInt(hand.p1.value) === parseInt(hand.p2.value)) {
        setHandWinner("Warrrrr!!");
      }
    }
  };

  const handlePlayclick = () => {
    if (p1Cards.length > 0 && p2Cards.length > 0) {
      setHand({
        p1: p1Cards.pop(),
        p2: p2Cards.pop(),
      });
    }
  };

  return (
    <div>
      <h4>Winner: {handWinner}</h4>
      <button onClick={() => handlePlayclick()}>Play</button>
      <div>
        <h3>Player 1 Cards</h3>
        {hand.p1 ? <img src={hand.p1.image} /> : null}
      </div>
      <div>
        <h3>Player 2 Cards</h3>
        {hand.p2 ? <img src={hand.p2.image} /> : null}
      </div>
    </div>
  );
};

export default Cards;
