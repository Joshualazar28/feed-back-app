import React, { useState } from 'react';

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(1);
  const Handlehange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <div>
      <ul className="rating">
        <li>
          <input
            type="radio"
            id="num1"
            name="rating"
            value="1"
            onChange={Handlehange}
            checked={selected === 1}
          />
          <label htmlFor="num1">1</label>
        </li>
        <li>
          <input
            type="radio"
            id="num2"
            name="rating"
            value="2"
            onChange={Handlehange}
          />
          <label htmlFor="num2">2</label>
        </li>
        <li>
          <input
            type="radio"
            id="num3"
            name="rating"
            value="3"
            onChange={Handlehange}
          />
          <label htmlFor="num1">3</label>
        </li>
      </ul>
    </div>
  );
};

export default RatingSelect;
