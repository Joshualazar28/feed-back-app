import React, { useState } from 'react';
import Card from './shared/Card';
const Feedbackitem = ({ item, HandleDelete }) => {
  return (
    <div>
      <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        <button onClick={() => HandleDelete(item.id)}>Click</button>
      </Card>
    </div>
  );
};

export default Feedbackitem;
