import React from 'react';
import './computer.css'
import paper from './assets/paper.png';
import rock from './assets/rock.png';
import scissors from './assets/scissors.png';
import defaultImg from './assets/defaultImg.jpg';

const Computer = (props) =>{
const choice = props.computerChoice;

  if (choice === 'paper') {
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
