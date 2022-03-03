import './Loginform.css';
import React from 'react';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';

export default function LoginForm({ onSubmit, label = 'Authenticate' }) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',

    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      setFormError('');
      if (!email || password.length < 8)
        throw new Error('email & Password has to be 8+ characters');
      await onSubmit(email, password);
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <>
      <form
        className="bg-white shadow-md rounded py-4 px-4"
        onSubmit={handleSubmit}
      >
        <legend className="text-sm font-bold ">{label}</legend>
        <section>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            email:{' '}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleFormChange}
          />
        </section>
        <section>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:{' '}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
          />
        </section>
        <button className="bg-blue-500 hover:bg-blue-700 py-0.3 text-white font-bold rounded focus:outline-none focus:shadow-outline">
          Sign In
        </button>
        {formError && <p>{formError}</p>}
      </form>

      <button className="bg-slate-400 rounded absolute left-80  ">
        <Link className="text-black font-bold " to="/">
          Back to Home
        </Link>
      </button>
      <hr></hr>
    </>
  );
}
