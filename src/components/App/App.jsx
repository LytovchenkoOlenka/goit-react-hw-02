import { useEffect, useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import "./App.module.css";

export default function App() {
  const [types, setTypes] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback !== null
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(types));
  }, [types]);

  const updateFeedback = (feedbackType) => {
    setTypes({
      ...types,
      [feedbackType]: types[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setTypes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = types.good + types.neutral + types.bad;
  const positiveFeedback = Math.round((types.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          types={types}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
