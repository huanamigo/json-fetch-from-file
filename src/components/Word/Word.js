import React from 'react';

function Word(props) {
  return (
    <>
      <li>English word: {props.en}</li>
      <ul>
        <li>Polish translation: {props.pl}</li>
      </ul>
    </>
  );
}

export default Word;
