import { useGame } from "./gameContext";
import Field from "./field";
import Scoreboard from "./scoreboard";
import Welcome from "./welcome";

export default function App() {
  const { playing } = useGame();

  return (
    <>
      <h1>Whack a mole</h1>
      {playing ? (
        <>
          <Scoreboard />
          <Field />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}
