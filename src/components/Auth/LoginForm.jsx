import './Loginform.css';
import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';

export default function LoginForm({
  className = '',
  onSubmit,
  label = 'Authenticate',
}) {
  const { formState, formError, handleFormChange, setFormError } = useForm({

    username: '',

    password: '',
  });

  useEffect(() => {}, [label]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formState;

    try {
      setFormError('');
      if (!username || password.length < 8)
        throw new Error('Username & Password has to be 8+ characters');
      await onSubmit(username, password);

    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <>
      <form className={className} onSubmit={handleSubmit}>
        <legend>{label}</legend>
        <section>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="username"
            name="username"
            value={formState.username}
            onChange={handleFormChange}
          />
        </section>
        <section>

          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
          />
        </section>
        <button className="formbutton">Sign In</button>
        {formError && <p>{formError}</p>}
      </form>
      <Link to="/">Back to Home</Link>
      <hr></hr>
    </>
  );
}
