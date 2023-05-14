import { useState } from 'react';
import React from 'react';
import './App.css';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import Reset from './components/Reset';
function App() {
 const win_conditions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
 ]
  const [board,setBoard]=useState(Array(9).fill(null))
  const[xplaying,setXplaying]=useState(true);
  const [scores,setScores]=useState({xscore:0 , oScore:0});
  const [gameOver,setGameOver]=useState(false)

  const handleronclick=(boxidx)=>{
    const updateBoard=board.map((value,index)=>{
      if(boxidx===index){
        return xplaying?"X":"O"
      }

      else{
        return value;
      }
    })

  const winner= checkwinner(updateBoard);

  if(winner){
    if(winner==='O'){
      let {oScore}=scores;
      oScore+=1;
      setScores({...scores,oScore})
    }else{
      let {xscore}=scores;
      xscore+=1;
      setScores({...scores,xscore})
    }
  }

    setBoard(updateBoard)
    setXplaying(!xplaying)
  }
  
  const checkwinner=(board)=>{
    for(let i=0;i<win_conditions.length;i++){
      let [x,y,z]=win_conditions[i];
      if(board[x]&&board[x]===board[y]&& board[y]===board[z]){
        setGameOver(true)
        return board[x];  
        // console.log(board[x])
      }
    }
  }

  const resetboard=()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">
      <Scoreboard scores={scores} xplaying={xplaying}/>
      <Board board={board} onClick={gameOver?resetboard: handleronclick}/>
      <Reset resetboard={resetboard}/>
    </div>
  );
}

export default App;
