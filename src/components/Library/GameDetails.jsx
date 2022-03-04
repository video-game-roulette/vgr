import React, { useEffect, useState } from 'react';
import { useGame } from '../../context/GameContext';
import { Link, useHistory, useParams } from 'react-router-dom';

import { deleteGame, getGamesById } from '../../services/game';

export default function GameDetails() {
  const { game, setGame } = useGame();
  const { gameid } = useParams();
  const data = game.data;
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getGamesById(gameid);
      setGame(resp);
      setLoading(false);
    };
    fetchData();
  }, [gameid]);

  const handleDelete = async () => {
    await deleteGame(data.id);
    history.push('/profile');
  };

  if (loading) {
    return <h1>please wait </h1>;
  }

  return (
    <div className="py-2">
      <h1
        className="text-slate-200 text-3xl font-bold "
        aria-label="game title"
      >
        {data.title}
      </h1>
      <img className="m-auto" src={data.image} aria-label="game image" />
      <h3 className="font-bold text-slate-200" aria-label="game description">
        {data.description}
      </h3>
      <button className="flex border-4 mt-5 font-bold bg-indigo-400 m-auto text-slate-200 rounded-md text-2xl p-2 mb-5">
        <Link to={`/library/edit/${data.id}`}>edit</Link>
      </button>
      <button
        className="flex border-4 mt-5 font-bold bg-indigo-400 m-auto text-slate-200 rounded-md text-2xl p-2 mb-5"
        onClick={handleDelete}
      >
        {/* <Link to="/profile">Delete Game</Link> */}
        Delete Game
      </button>
    </div>
  );
}
