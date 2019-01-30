import React from 'react';
import './result.css'
import {refresh} from '../../utils';
const Result = ({wins,losses,draws}) =>{
    return (
    <div>
      <li>
      <h2>
      <span className='res'>Result</span>
      <span className='result'>Wins : {wins}
      </span>
      <span className='result'>losses : {losses}</span>
      <span className='result'>Draws : {draws}</span>
      <button className='playAgain' onClick={refresh}>Play Again</button>
      </h2>
      </li>
    </div>
  );
};
export default Result;
