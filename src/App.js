import React, { Component } from 'react';
import ShowOtherAdviceButton from './ShowOtherAdviceButton';
import './App.css';

class App extends Component {
  state = {
    advice: '',
  }

  async componentDidMount() {
    this.loadAdvice();
  }

  loadAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const { slip: { advice } } = await response.json();
      this.setState({ advice });
    } catch(error) {
      this.setState({advice: ''});
    }
  }

  render() {
    return (
      <div className="App">
        <p className="Advice">{this.state.advice || '…'}</p>
        <ShowOtherAdviceButton onClick={this.loadAdvice} />
      </div>
    );
  }
}

export default App;
