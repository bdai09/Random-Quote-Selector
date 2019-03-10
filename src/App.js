import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Bounce, Shake } from 'react-motions';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'


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
const likelist=[];
class DisplayQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0],
      currentIdx: 0,
      Like: "No"
    };
   this.tweetQuote = this.tweetQuote.bind(this);
   this.likeQuote = this.likeQuote.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this);
    this.likeListAdd = this.likeListAdd.bind(this);
    this.likeListRemove = this.likeListRemove.bind(this);

 }
  tweetQuote(event) {
  //<a href=""twitter.com/intent/tweet"" />
  }
  likeQuote(){
    this.setState({
      Like: "Yes"
    })  
  }
  handleNewQuote() {  
    let rqm;
    do {
       rqm = Math.floor(Math.random() * quotes.length)
    } while (this.state.currentIdx === rqm)
    this.setState({
      quote: quotes[rqm],
      currentIdx: rqm,
      Like: "No"
    })      
  } 
  likeListAdd(){
    var cnt=true;
    if(this.Like=="Yes") {
      likelist.map((i)=>{
        if(i.currentIdx==this.currentIdx) cnt=false;
      });
      if(cnt==true) likelist.push(this);
    }   
  }

  likeListRemove(){



  }
  render() {
    return (
     <Container>
       <div className="contain">
        <p className="text">{this.state.quote.text}</p>
        
        <p className="text text-right">{this.state.quote.author}</p>
      
        <Row>
          <Col xs={6} sm={5} md={4} lg={3}>
            <button className="btn btn-block btn-primary" onClick={this.likeListAdd}><i className="fa fa-thumbs-up"></i>Like</button>
          </Col>
          <Col xs={6} sm={5} md={5} lg={3}>
            <button className="btn btn-block btn-info" onClick={this.tweetQuote}><i className="fa fa-twitter"></i>Tweet</button>
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
          <p>Favourate Board</p> 
           
           
          </div>
      </Container>
    );
  }
};
//ReactDOM.render(<DisplayQuote />,document.getElementById('root'));
export default DisplayQuote;

