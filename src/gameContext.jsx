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
}
