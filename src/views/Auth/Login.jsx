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
        const user = await signUpUser(email, password);
        setUser(user);
      } else {
        const user = await signInUser(email, password);
        setUser(user);
      }
      history.replace('/profile');
    } catch (error) {
      throw error;
    } finally {
      // i wouldn't use a finally here -- you can just put that in the try.
      // You don't want to redirect on failure -- you only want to redirect
      // if the auth is succesful -- finally runs regardless
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
