import { createContext, useContext, useEffect, useRef, useState } from "react";

let NUM_HOLES = 9;
let TIME_LIMIT = 20;

const gameContext = createContext();

export function GameProvider({ children }) {
  const [field, setField] = useState(makeField());
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [playhing, setPlaying] = useState(false);
  const [time, setTime] = useState(TIME_LIMIT);
  const timer = useRef();

  useEffect(() => {
    if (time <= 0) stop();
  }, [time]);

  const whack = () => {
    setField(makeField(field));
    setScore(score + 1);
  };

  const start = () => {
    setScore(0);
    setField(makeField());
    setPlaying(true);

    time.current = setInterval(() => setTime((time) => time - 1), 1000);
  };

  const stop = () => {
    setPlaying(false);

    const newScores = [...highScores, score].sort((a, z) => z - a);
    setHighScores(newScores.slice(0, 5));

    clearInterval(timer.current);
    setTime(TIME_LIMIT);
  };

  const value = {
    field,
    score,
    highScores,
    playing,
    time,
    whack,
    start,
    stop,
  };
  return <gameContext.Provider value={value}>{children}</gameContext.Provider>;
}

export function useGame() {
  const context = cuseContext(GameContext);
  if (!context) throw Error("Context must be withing GameProvider.");
  return context;
}

function makeField(field = []) {
  const newField = Array(NUM_HOLES).fill(false);
  let mole = Math.floor(Math.random() * NUM_HOLES);
  while (field[mole]) {
    mole = Math.floor(Math.random() * NUM_HOLES);
  }

  newField[mole] = true;
  return newField;
}
