import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useGame } from '../../context/GameContext';
import { getGamesById } from '../../services/game';

export default function Randomizer() {
  const { game, setGame } = useGame();
  const { title, description, image } = game;
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomGame = async () => {
      const resp = await getGamesById(user);
      setGame(resp);
      setLoading(false);
    };
    fetchRandomGame();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="randomizer">
      <h1>You Should Play: {title}</h1>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
}
