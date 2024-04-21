export default function Feedback({
  types: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <ul>
        <li>
          <p>
            <span>Good:{good}</span>
          </p>
        </li>
        <li>
          <p>
            <span>Neutral:{neutral}</span>
          </p>
        </li>
        <li>
          <p>
            <span>Bad:{bad}</span>
          </p>
        </li>
      </ul>
      <p>Total:{totalFeedback}</p>
      <p>Positive:{positiveFeedback}%</p>
    </div>
  );
}
