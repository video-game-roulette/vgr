import React from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import { useUser } from '../../context/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { signUpUser, signInUser } from '../../services/user';

export default function Login({ isSigningUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
      } else {
        const loggedIn = await signInUser(email, password);
        setUser(loggedIn.email);
      }
    } catch (error) {
      throw error;
    } finally {
      history.replace('/profile');
    }
  };

  return (
    <section className="mt-5 my-5">
      <LoginForm
        onSubmit={handleAuth}
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
      />
      {isSigningUp ? (
        <p className="text-slate-200 text-center">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      ) : (
        <p className="text-slate-200 text-center">
          Need an account? <Link to="/signup">Sign Up</Link>
        </p>
      )}
    </section>
  );
}
