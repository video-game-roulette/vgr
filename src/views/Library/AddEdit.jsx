import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GameForm from '../../components/Library/GameForm';
import { addGame, updateGame } from '../../services/game';

export default function AddEdit({ isAdding = false }) {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const history = useHistory();

  const handleSubmit = async (title, image, description) => {
    try {
      if (!isAdding) {
        await addGame(title, image, description);
      } else {
        const addGame = await updateGame(title, image, description);
        setTitle(addGame.title);
        setImage(addGame.image);
        setDescription(addGame.description);
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
        label={isAdding ? 'Add Game' : 'Edit Game'}
      />
    </section>
  );
}
