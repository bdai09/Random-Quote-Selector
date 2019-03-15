import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Bounce, Shake } from 'react-motions';
import {Helmet}from 'react-helmet';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'


/******random quote machine*******/
var colors=['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

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
//const likelist=[];
class DisplayQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0],
      currentIdx: 0,
      currentcolor:'#16a085',
      Like: "No"
    };
   //this.tweetQuote = this.tweetQuote.bind(this);
   this.likeQuote = this.likeQuote.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this);
    //this.likeListAdd = this.likeListAdd.bind(this);
    this.likeListRemove = this.likeListRemove.bind(this);

 }

  likeQuote(){
    this.setState({
      Like: "Yes"
    })  
  }
  handleNewQuote() {  
    let rqm;
    let rqmcolor
    do {
       rqm = Math.floor(Math.random() * quotes.length);
      rqmcolor = Math.floor(Math.random() * colors.length);

    } while (this.state.currentIdx === rqm&&this.state.currentcolor === rqmcolor )
    this.setState({
      quote: quotes[rqm],
      currentIdx: rqm,
      currentcolor:colors[rqmcolor],
      Like: "No"
    })  
  } 

  likeListRemove(){
    this.setState({
      Like: "No"
    }) 
  }
  render() {
    return (
     <Container>
       <Helmet>
         <body style={'background-color:'+this.state.currentcolor}></body>
        </Helmet>
       <div className="contain">
       <blockquote><p className="text">{this.state.quote.text}</p></blockquote>
        
        <p className="text text-right">{this.state.quote.author}</p>
        
        <Row>
          <Col xs={6} sm={5} md={4} lg={3}>
            <button className="btn btn-block btn-primary" onClick={this.likeQuote}><i className="fa fa-thumbs-up"></i>Like</button>
          </Col>
          <Col xs={6} sm={5} md={5} lg={3}>
          <a style={{ textDecoration: 'none' }} target="_blank" href={'https://twitter.com/intent/tweet/?text='+this.state.quote.text+
          ' - '+this.state.quote.author}>
          <button className="btn btn-block btn-info"><i className="fa fa-twitter"></i>Tweet</button></a>
          </Col>   
          <Col xs={0} sm={0} md={0} lg={3}>
          </Col>
          <Bounce duration={4} infinite>
          <Col xs={12} sm={12} md={12} lg={12}>
          <div className="text-right">
            <button className="btn btn-success" onClick={this.handleNewQuote}>New-Quote</button>
            </div>
          </Col>
          </Bounce>
        </Row>
        </div>
        <div className="board">
          <p className="text2">Favourate Board</p>
           {this.state.Like==="Yes" && 
           <div><p className="text2">{this.state.quote.text}</p>
          <p className="text2 text-right">{this.state.quote.author}</p></div>}      
        </div>
      </Container>
    );
  }
};




//ReactDOM.render(<DisplayQuote />,document.getElementById('root'));
export default DisplayQuote;

