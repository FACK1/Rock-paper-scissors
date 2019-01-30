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
    this.res=null;
    this.onPlayerChoiceClick = this.onPlayerChoiceClick.bind(this);
  }

  onPlayerChoiceClick(choice) {
    this.comChoice=getRandomChoice();
    const result = getWinner(choice,this.comChoice );

    this.setState((prevState) => {
      if (result === 'wins') return { wins: prevState[result] + 1 }
      else if (result === 'draws') return { draws: prevState[result] + 1 }
      else if (result === 'losses') return { losses: prevState[result] + 1 }
    },()=>{

      if (this.state.wins == 5){
        this.state.res = 'win';
      } else if(this.state.draws == 5){
        this.state.res = 'draw';
      } else if(this.state.losses == 5 ){
        this.state.res = 'lose';
      }
      else if(this.state.wins >= 5 || this.state.draws >= 5 || this.state.losses >= 5){
        window.location.reload();
      }
  });
  }
  render() {
    return (<div>
      <Header />
      <Computer computerChoice={this.comChoice} res={this.state.res} />
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
