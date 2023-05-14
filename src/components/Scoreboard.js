import React from 'react'
import './Scoreboard.css';
const Scoreboard = ({scores,xplaying}) => {
    const {xscore,oScore}=scores;
  return (
    <div className='scoreboard'>
      <span className={`score x-score ${!xplaying && "inactive"}`}>X -{xscore}</span>
      <span className={`score o-score ${xplaying && "inactive"}`}>O -{oScore}</span>
    </div>
  )
}

export default Scoreboard
