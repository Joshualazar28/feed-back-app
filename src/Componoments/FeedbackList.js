import React from 'react';
import Feedbackitem from './feedbackitem';
const FeedbackList = ({ feedback , HandleDelete}) => {
  if (!feedback || feedback.length === 0) {
    return <h1>NOT FOUND FEEDBACK</h1>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item, index) => {
        console.log(item);
        return (
          <>
            <Feedbackitem key={item.id} item={item}  HandleDelete={HandleDelete}/>
          </>
        );
      })}
    </div>
  );
};

export default FeedbackList;
