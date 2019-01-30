import React from 'react';
import './result.css'
const Result = ({wins,losses,draws}) =>{
    return (
    <div>
      <li>
      <h2>
      <span className='res'>Result</span>
      <span className='result'>Wins : {wins}</span>
      <span className='result'>losses : {losses}</span>
      <span className='result'>Draws : {draws}</span>
      </h2>
      </li>
    </div>
  );
};
export default Result;
