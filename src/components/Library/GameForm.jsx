import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

export default function GameForm({ onSubmit, title, label = 'Authenticate' }) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    title: '',
    description: '',
    image: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, image } = formState;

    try {
      setFormError('');
      if (!title) throw new Error('Please enter a game title');
      await onSubmit(title, description, image);
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
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            type="text"
            name="description"
            value={formState.description}
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
        <button>Add Game</button>
        {formError && <p>{formError}</p>}
      </form>
      <Link to="/library">Back to Library</Link>
    </>
  );
}
