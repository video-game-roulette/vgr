import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

export default function GameForm({ game, onSubmit, label = 'Authenticate' }) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    title: game?.title || '',
    description: game?.description || '',
    image: game?.image || '',
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
        <legend>{label}</legend>
        <section>
          <label className="text-slate-200 font-bold" htmlFor="title">
            Title:{' '}
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formState.title}
            onChange={handleFormChange}
          />
        </section>
        <section>
          <label className="text-slate-200 font-bold" htmlFor="description">
            Description:{' '}
          </label>
          <input
            id="description"
            type="text"
            name="description"
            value={formState.description}
            onChange={handleFormChange}
          />
        </section>
        <section>
          <label className="text-slate-200 font-bold" htmlFor="image">
            Image Link:{' '}
          </label>
          <input
            htmlFor="image"
            id="image"
            type="text"
            name="image"
            value={formState.image}
            onChange={handleFormChange}
          />
        </section>
        <button className="flex border-4 font-bold bg-indigo-400 m-auto text-slate-200 rounded-md text-2xl p-2 mb-5">
          Save Game
        </button>
        {formError && <p>{formError}</p>}
      </form>
      <button className="flex border-4 font-bold bg-indigo-400 m-auto text-slate-200 rounded-md text-2xl p-2 mb-5">
        <Link to="/profile">Back to Profile</Link>
      </button>
    </>
  );
}
