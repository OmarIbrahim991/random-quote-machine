import React from 'react'
import Quotes from './quotes'
import './App.css'

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: 'Start where you are. Use what you have. Do what you can.',
      author: 'Arthur Ashe',
      num: 0
    }
  }

  getNewQuote = () => {
    let index = Math.floor(Math.random()*Quotes.length)
    while (index === this.state.num) {
      index = Math.floor(Math.random()*Quotes.length)
    }
    this.setState({quote: Quotes[index].quote, author: Quotes[index].author, num: index})
  }

  render() {
    return (
    <div id="quote-box">
      <div id="text">
        {this.state.quote}
      </div>
      <div id="author">
        -{this.state.author}
      </div>
      <div id="buttons">
        <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
        <a id="new-quote" href="#" onClick={this.getNewQuote}>New quote</a>
      </div>
    </div>
    )
  }
}