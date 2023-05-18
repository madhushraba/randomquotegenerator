import React from 'react';
import './style.css';
import { useState } from 'react';
export default function App() {
  const quotes = [
    'Stressed, blessed, pumpkin obsessed. ',
    'Pumpkin kisses and harvest wishes',
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    'In the middle of every difficulty lies opportunity. - Albert Einstein',
    'The best revenge is massive success. - Frank Sinatra',
    'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    'Sweater weather is better together.',
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    'The secret to getting ahead is getting started. - Mark Twain',
    "Happiness is a hot drink on a cold day.",
  ];
  const [count, setCount] = useState(0);
  function changeText() {
    setCount(count + 1);
    if (count === 9) {
      setCount(0);
    }
  }
  return (
    <div>
      <h1> {quotes[count]} </h1>
    
      <button onClick={changeText}>changing greet</button>
    </div>
  );
}
