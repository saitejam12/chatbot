import React from 'react';
import './Options.css';
const Options = (props) => {
  const options = [
    {
      text: 'Javascript',
      id: 1,
      handler: props.actionProvider.handleOption,
    },
    {
      text: 'React',
      id: 2,
      handler: () => {},
    },
    {
      text: 'Angular',
      id: 3,
      handler: () => {},
    },
  ];
  const widgetButtons = options.map((opt) => (
    <button className='options-button' key={opt.id} onClick={opt.handler}>
      {opt.text}
    </button>
  ));
  return <div className='options-container'>{widgetButtons}</div>;
};

export default Options;
