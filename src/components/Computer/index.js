import React from 'react';
import './computer.css'
import paper from './assets/paper.png';
import rock from './assets/rock.png';
import scissors from './assets/scissors.png';
import defaultImg from './assets/defaultImg.jpg';
import win from './assets/win.jpg';
import draw from './assets/draw.jpg';
import lose from './assets/lose.jpg';

const Computer = (props) =>{
const choice = props.computerChoice;
const res = props.res;
if (res === 'win') {
  return (
    <div className='computer'>
      <h1> You WIN ! </h1>
      <img src={win} alt='Win'/>
    </div>
  )
}
else if (res === 'lose') {
  return (
    <div className='computer'>
      <h1> You LOSE ! </h1>
      <img src={lose} alt='lose'/>
    </div>
  )
}
else if (res === 'draw') {
  return (
    <div className='computer'>
      <h1> You DRAW ! </h1>
      <img src={draw} alt='draw'/>
    </div>
  )
}
  else if (choice === 'paper') {
    return (
      <div className='computer'>
        <h1> Computer </h1>
        <img src={paper} alt='paper'/>
      </div>
    )
  }
  else if (choice === 'rock') {
    return (
      <div className='computer'>
        <h1> Computer </h1>
        <img src={rock} alt='rock'/>
      </div>
    )
  }
  else if (choice === 'scissors') {
    return (
      <div className='computer'>
        <h1> Computer </h1>
        <img src={scissors} alt='scissors'/>
      </div>
    )
  }
  else {
    return (
      <div className='computer'>
        <h1> Computer </h1>
        <img src={defaultImg} alt='Start'/>
      </div>
    )
  }
  }
export default Computer;
