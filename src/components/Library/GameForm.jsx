import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

export default function GameForm({ onSubmit, label = 'Authenticate' }) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    title: '',
    image: '',
    descrip: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, image, descrip } = formState;

    try {
      setFormError('');
      if (!title) throw new Error('Please enter a game title');
      await onSubmit(title, image, descrip);
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formState.title}
            onChange={handleFormChange}
          />
        </section>
        <section>
          <label htmlFor="image">Image Link: </label>
          <input
            htmlFor="image"
            id="image"
            type="text"
            name="image"
            value={formState.image}
            onChange={handleFormChange}
          />
        </section>
        <section>
          <label htmlFor="descrip">Description: </label>
          <input
            id="descrip"
            type="text"
            name="descrip"
            value={formState.descrip}
            onChange={handleFormChange}
          />
        </section>
        <button>Add Game</button>
        {formError && <p>{formError}</p>}
      </form>
      <Link to="/library">Back to Library</Link>
    </>
  );
}
