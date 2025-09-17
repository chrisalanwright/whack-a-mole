export default function Welcome() {
  const { start, highScores } = useGame();
  return (
    <>
      <section className="welcome">
        <p>Welcome!</p>
        <p>Whack as many moles as you can!</p>
        <button onClick={start}>Start</button>
      </section>
      <section className="highscores">
        <h2>High Scores!</h2>
        <ul>
          {" "}
          {highScores.length > 0 ? (
            highScores.map((score, i) => <li key={i}>{score}</li>)
          ) : (
            <li>It's empty.</li>
          )}
        </ul>
      </section>
    </>
  );
}
