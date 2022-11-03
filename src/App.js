import React, { useState } from 'react';
import Word from './components/Word/Word';

function App() {
  const [words, changeWords] = useState([]);
  const [isLoaded, handleLoad] = useState(false);

  const fetchData = () => {
    fetch('./data/words.json')
      .then((res) => res.json())
      .then((data) => {
        changeWords(data.words);
        handleLoad(true);
      });
  };

  setInterval(fetchData, 2000);

  const wordArr = words.map((word) => (
    <Word key={word.id} en={word.en} pl={word.pl}></Word>
  ));

  return (
    <>
      <ul>{isLoaded ? wordArr : 'Loading data'}</ul>
    </>
  );
}

export default App;
