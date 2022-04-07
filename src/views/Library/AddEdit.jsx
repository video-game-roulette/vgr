import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import GameForm from '../../components/Library/GameForm';
import { addGame, getGamesById, updateGame } from '../../services/game';

export default function AddEdit({ isAdding = false }) {
  const [game, setGame] = useState({ title: '', description: '', image: '' });
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { gameid } = useParams();

  useEffect(() => {
    // this is throwing an error on the "/addgame" route
    // because you don't have a gameId
    const fetchData = async () => {
      const resp = await getGamesById(gameid);
      setGame(resp);
      setLoading(false);
    };
    fetchData();
  }, [gameid]);

  const handleSubmit = async (title, description, image) => {
    try {
      if (!isAdding) {
        await addGame(title, description, image);
        history.replace(`/profile/`);
      } else {
        await updateGame(gameid, title, description, image);
        history.replace(`/profile/${gameid}`);
      }
    } catch (error) {
      throw error;
    }
  };

  if (loading) return <p>loading...</p>;

  return (
    <section>
      <GameForm
        game={game.data}
        onSubmit={handleSubmit}
        label={!gameid ? 'Add Game' : 'Edit Game'}
      />
    </section>
  );
}
