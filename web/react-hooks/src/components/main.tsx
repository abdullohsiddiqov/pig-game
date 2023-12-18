import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
export function Main() {
  const [username1 , setUsername1] = useState<string | null>();
  const [username2 , setUsername2] = useState<string | null>();
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);
  const [currentDiceValue, setCurrentDiceValue] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [currentPlayerScore1, setCurrentPlayerScore1] = useState<number>();
  const [currentPlayerScore2, setCurrentPlayerScore2] = useState<number>();
  const { gameId } = useParams()
  useEffect(() => {
    async function GetId(){
      const {data} = await axios.get(`http://localhost:4000/api/games/pig/${gameId}`);
      console.log(data.data);
      setUsername1(data.data.player1.name)
      setUsername2(data.data.player2.name)
    }
    GetId();
    
  },[])
  const handleRollDice = () => {
    const newDiceValue = Math.floor(Math.random() * 6) + 1;
    setCurrentDiceValue(newDiceValue);
  };
  const handleHold = () => {
    if (currentDiceValue !== 0) {
      if (currentPlayer === 1) {
        setPlayer1Score((prevScore) => prevScore + currentDiceValue);
      } else {
        setPlayer2Score((prevScore) => prevScore + currentDiceValue);
      }
      setCurrentDiceValue(0);
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };
  const handleNewGame = () => {
    setUsername1(null);
    setUsername2(null);
    setCurrentDiceValue(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
  };
  return (
    <div className="flex  bg-red-400 h-screen justify-center items-center">
      <div className="player_info_1 flex flex-col  items-center bg-red-300  border rounded-l-lg h-[600px] w-[500px]">
        <h3 className="text-[30px] mt-20">{username1}</h3>
        <p className="text-[50px] mt-10">{player1Score}</p>
        <div
          className="current flex flex-col bg-red-600 w-[240px] h-[100px] mt-44 rounded justify-center items-center
        "
        >
          <p>CURRENT</p>
          <span className="text-[30px]">{currentPlayerScore1}</span>
        </div>
      </div>
      <div className="player_info_1 flex flex-col  items-center bg-red-200  border rounded-r-lg h-[600px] w-[500px]">
        <h3 className="text-[30px] mt-20">{username2}</h3>
        <p className="text-[50px] mt-10">{player2Score}</p>
        <div
          className="current flex flex-col bg-red-600 w-[240px] h-[100px] mt-44 rounded justify-center items-center
        "
        >
          <p>CURRENT</p>
          <span className="text-[30px]">{currentDiceValue}</span>
        </div>
      </div>
      <div
        className="flex flex-col  items-center absolute
      "
      >
        <button
          className="bg-red-100 w-[200px] h-16 rounded-full text-[25px]
        "
        onClick={() => handleNewGame()}
        >
          NEW GAME
        </button>
        <div className=" mt-[20px] text-[50px] bg-white w-24 h-24 flex items-center justify-center">{currentDiceValue}</div>
        <button
          className="bg-red-100 w-[200px] h-12 rounded-full text-[20px] mt-40
        "
        onClick={() => handleRollDice()}
        >
          ROLL DICE
        </button>
        <button
          className="bg-red-100 w-[140px] h-12 rounded-full text-[20px] mt-5
        "
        onClick={() => handleHold()}
        >
          HOLD
        </button>
      </div>
    </div>
  );
}