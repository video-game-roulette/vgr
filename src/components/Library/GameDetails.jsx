import React, { useEffect, useState } from 'react';
import { useGame } from '../../context/GameContext';
import { Link, useParams } from 'react-router-dom';
import { deleteGame, getGamesById } from '../../services/game';

export default function GameDetails() {
  const { game, setGame } = useGame();
  const { gameid } = useParams();
  const data = game.data;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getGamesById(gameid);
      setGame(resp);
      setLoading(false);
    };
    fetchData();
  }, [gameid]);

  const handleDelete = () => {
    deleteGame(data.id);
  };

  if (loading) {
    return <h1>please wait </h1>;
  }

  console.log('game', game);
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} />
      <h3>{data.description}</h3>
      <button>
        <Link to={`/library/edit/${data.id}`}>edit</Link>
      </button>
      <button onClick={handleDelete}>
        <Link to="/profile">Delete Game</Link>
      </button>
    </div>
  );
}
