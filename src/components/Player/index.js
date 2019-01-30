import React from 'react';
import './player.css'
import paper from './assets/paper.png';
import rock from './assets/rock.png';
import scissors from './assets/scissors.png';

const Player = (props) =>{
    return (
      <div className='player'>
        <h1>Player</h1>
        <div className="choices">
          <button className='btns' onClick={() => props.onPlayerChoiceClick('rock')}><img src={rock} alt='Rock'/></button>
          <button className='btns' onClick={() => props.onPlayerChoiceClick('paper')}><img src={paper} alt="paper"/></button>
          <button className='btns' onClick={() => props.onPlayerChoiceClick('scissors')}><img src={scissors} alt='Scissors'/></button>
        </div>
      </div>
    )
  }

export default Player;
