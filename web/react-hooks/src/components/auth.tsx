import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { IAuth, IEntity } from '../utils/types';
import axios from 'axios';

async function handleAuth({ player1, player2, max }: IAuth.IPlayers) {
  if (!player1 || !player1.trim()) return;
  if (!player2 || !player2.trim()) return;

  try {
    const response = await axios.post("http://localhost:4000/api/games/pig", {
      player1,
      player2,
      max,
    });

    const game = response.data as IEntity.IResponse;
    console.log("gameID: ", game);

    return game;
  } catch (error) {
    console.error("Error in handleAuth:", error);
    throw error;
  }
}
export function Auth() {
  const [player1, setUser1] = useState('');
  const [player2, setUser2] = useState('');
  const [max, setMax] = useState('');
  const navigate = useNavigate();

  const handleUserName1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser1(e.target.value);
  };

  const handleUserName2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser2(e.target.value);
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(e.target.value);
  };

  const navigateToGame = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const game = await handleAuth({ player1, player2, max });

      if (game) {
        navigate("/game", { state: { player1, player2 } });
      } else {
        alert("Failed to register players");
      }
    } catch (error) {
      console.error("Error in navigateToGame:", error);
      alert("An error occurred while registering players");
    }
  };

  return (
      <div>
        <form onSubmit={navigateToGame}>
          <input
            required
            type="text"
            placeholder="Username of 1st Player"
            onChange={handleUserName1}
          />
          <input
            required
            type="text"
            placeholder="Username of 2nd Player"
            onChange={handleUserName2}
          />
          <input
            required
            type="number"
            placeholder="Max value"
            onChange={handleMax}
          />
          <button type="submit" className="register_btn">
            Register Players
          </button>
        </form>
      </div>
  );
}