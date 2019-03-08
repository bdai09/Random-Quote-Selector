import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


/******random quote machine*******/
const quotes = [{
  text: 'Well Bones, do the new medical facilities meet with your approval?',
  author: '-Kirk'
}, {
  text: 'Live long and prosper',
  author: '-Spock'
}, {
  text: 'Computers make excellent and efficient servants, but I have no wish to serve under them.',
  author: '-Spock'
}, {
  text: 'In critical moments, men sometimes see exactly what they wish to see.',
  author: '-Spock'
}, {
  text: 'When you eliminate the impossible, whatever remains, however improbable, must be the truth.',
  author: '-Spock'
}, {
text: 'The needs of the many outweigh the needs of the few.',
  author: '-Spock'
}, {
text: 'What am I, a doctor or a moon-shuttle conductor?',
  author: '-McCoy'
}, {
text: 'Resistance Is Futile',
  author: '-Borg '
}, {
text: 'In Space, all warriors are Cold Warriors.',
  author: '-Klingon Proverb'
}, {
  text: 'How we deal with death is at least as important as how we deal with life',
  author: '-Kirk'
}];

class DisplayQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0],
      currentIdx: 0,
    };
   this.tweetQuote = this.tweetQuote.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this);
 }
  tweetQuote(event) {
  //<a href=""twitter.com/intent/tweet"" />
  }
  handleNewQuote() {  
    let rqm;
    do {
       rqm = Math.floor(Math.random() * quotes.length)
    } while (this.state.currentIdx === rqm)
    this.setState({
      quote: quotes[rqm],
      currentIdx: rqm,
    })      
  } 
  render() {
    return (
     <div id="quote-box">
        <p id="text">{this.state.quote.text}</p>
        <p id="author">{this.state.quote.author}</p>
        <button id="tweet-quote" onClick={this.tweetQuote}>tweet-quote</button>
        <button id="new-quote" onClick={this.handleNewQuote}>new-quote</button>
      </div>
    );
  }
};
//ReactDOM.render(<DisplayQuote />,document.getElementById('root'));

export default DisplayQuote;
