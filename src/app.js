import React, {Component} from 'react';
import Header from './components/Header'
import Computer from './components/Computer'
import Player from './components/Player'
import Result from './components/Result'
import {getRandomChoice, getWinner} from './utils';

const initialState = {
  wins: 0,
  losses: 0,
  draws: 0,
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.comChoice=null;
    this.onPlayerChoiceClick = this.onPlayerChoiceClick.bind(this);
  }

  onPlayerChoiceClick(choice) {
    const computerChoice=getRandomChoice();
    this.comChoice=computerChoice;
    const result = getWinner(choice,this.comChoice );

    this.setState((prevState) => {
      if (result === 'wins') return { wins: prevState[result] + 1 }
      else if (result === 'draws') return { draws: prevState[result] + 1 }
      else if (result === 'losses') return { losses: prevState[result] + 1 }
    });
  }

  render() {

    return (<div>
      <Header />
      <Computer computerChoice={this.comChoice} />
      <Result
          wins={this.state.wins}
          losses={this.state.losses}
          draws={this.state.draws}
        />
      <Player
      onPlayerChoiceClick={this.onPlayerChoiceClick}
      />
    </div>)
  }
}
export default App;
