import React, { useState } from 'react';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
const FeedBackForm = ({HandleAdd}) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    // 👈  get the value

    console.log(e.target.value);
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null)

      // prettier-ignore
    } else if (text !== '' && text.trim().length < 10) {
      // 👈 check for less than 10
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  console.log(rating, 'rating for feedback form');
  const HandleSubmit = (e) => {
    e.preventDefault();
    let newFeedback = {
      text,
      rating,
    };
    HandleAdd(newFeedback)

    setText('')
    
  };
  return (
    <Card>
      <form onSubmit={HandleSubmit}>
        <h2>How would you rate your services with us ? </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text} />
          <button type="submit">Send</button>
        </div>
        {message}
      </form>
    </Card>
  );
};

export default FeedBackForm;
