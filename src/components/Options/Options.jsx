import css from "./Options.module.css";

export default function Options({ updateFeedback, totalFeedback, onReset }) {
  return (
    <div className={css.buttonsContainer}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback ? <button onClick={onReset}>Reset</button> : null}
    </div>
  );
}
