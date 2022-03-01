import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GameForm from '../../components/Library/GameForm';
import { addGame, updateGame } from '../../services/game';

export default function AddEdit({ isAdding = false }) {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [decrip, setDescrip] = useState();
  const history = useHistory();

  const handleSubmit = async (title, image, descrip) => {
    try {
      if (isAdding) {
        await addGame(title, image, descrip);
      } else {
        const addGame = await updateGame(title, image, descrip);
        setTitle(addGame.title);
        setImage(addGame.image);
        setDescrip(addGame.descrip);
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
