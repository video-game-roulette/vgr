import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import GameForm from '../../components/Library/GameForm';
import { addGame, getGamesById, updateGame } from '../../services/game';

export default function AddEdit({ isAdding = false }) {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [input, setInput] = useState({ title: '', description: '', image: '' });
  const [game, setGame] = useState({ title: '', description: '', image: '' });
  const history = useHistory();
  const { gameid } = useParams();

  useEffect(() => {
    setInput(game.data);
  }, [game.data]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getGamesById(gameid);
      setGame(resp);
    };
    fetchData();
  }, [gameid]);

  console.log('game.data', game);

  const onChange = ({ target }) => {
    setInput((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = async (title, description, image) => {
    try {
      if (!isAdding) {
        await addGame(title, description, image);
      } else {
        const addGame = await updateGame(params.id, title, description, image);
        setTitle(game.title);
        setDescription(addGame.description);
        setImage(addGame.image);
      }
    } catch (error) {
      throw error;
    } finally {
      history.replace('/library');
    }
  };

  return (
    <section>
      <GameForm
        onSubmit={handleSubmit}
        onChange={onChange}
        label={isAdding ? 'Add Game' : 'Edit Game'}
      />
    </section>
  );
}
