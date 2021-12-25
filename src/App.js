import React, {useState} from 'react';
import Quote from './components/Quote';
import quotes from './quotes';
import './App.css';

function App() {
  const [quote, setQuote] = useState(0);
  const [color, setColor] = useState('lightblue');

  const getRandomColor = () => {
    const colors = ['tomato', 'lightblue', 'cyan', 'orange', 'pink'];
    return colors[(Math.floor(Math.random() * colors.length - 1))];
  }

  const handleEvent = () => {
    const targetQuoteIndex = Math.floor(Math.random() * quotes.length - 1);
    setQuote(targetQuoteIndex);
    setColor(getRandomColor());
  }

  return (
    <div className="App" style={{backgroundColor:color}}>

      <Quote 
        quote={quotes[quote]['quote']} 
        author={quotes[quote]['author']}
         />

      <button onClick={handleEvent} style={{backgroundColor:color}}>Next</button>

    </div>
  );
}

export default App;
