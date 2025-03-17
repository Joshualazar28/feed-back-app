import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Componoments/Header';
import FeedBackList from '../Componoments/FeedbackList';
import FeedbackData from '../Data/feedback';
import FeedbackStats from '../Componoments/FeedbackStats';
import FeedBackFrom from '../Componoments/FeedBackForm.js';

const Home = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  console.log(feedback);
  const HandleDelete = (id) => {
    console.log('App', id);
    if (window.confirm('Are you sure  you want to delete ')) {
      // console.log(feedback.filter((item) => item.id ))
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const HandleSubmit = (newValue) => {
    newValue.id = uuidv4();
    console.log(newValue, 'hoME PAGE');
    setFeedback([newValue, ...feedback]);
  };
  return (
    <div className="container">
      <Header text="Feedback UI" bgColor="blue" textColor="white" />

      <FeedBackFrom HandleAdd={HandleSubmit} />
      <FeedbackStats feedback={feedback} />
      <div style={{ color: 'white' }}>{feedback.length}</div>

      <FeedBackList feedback={feedback} HandleDelete={HandleDelete} />
    </div>
  );
};

export default Home;
