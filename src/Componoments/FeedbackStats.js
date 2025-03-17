import React from 'react';

const FeedbackStats = ({ feedback }) => {
  console.log(feedback);
  let arervage =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  console.log(arervage);
  return (
    <div className="feedback-stats">
      {isNaN(arervage) ? 0 : arervage.toFixed(2)}
    </div>
  );
};

export default FeedbackStats;
