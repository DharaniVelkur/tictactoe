import React from 'react'
import Box from './Box'
import './Board.css'
const Board = (props) => {
  return (
    <div className='board'>
        {props.board.map((e,id)=>{
     return <Box value={e} onClick={()=>e===null&&props.onClick(id)}/>
        })}
    </div>
  )
}

export default Board
