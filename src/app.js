import React, {Component} from 'react';
import Header from './components/Header'
import Computer from './components/Computer'
import Player from './components/Player'
import Result from './components/Result'


class App extends Component {
  render() {
    return (<div> <Header /> <Computer /> <Result /> <Player /></div>)
  }
}
export default App;
