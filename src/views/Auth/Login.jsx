import React from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import { useUser } from '../../context/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { signUpUser, signInUser } from '../../services/user';

export default function Login({ isSigningUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (username, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(username, password);
      } else {
        const loggedIn = await signInUser(username, password);
        setUser({ id: loggedIn.id, username: loggedIn.username });

      }
    } catch (error) {
      throw error;
    } finally {
      history.replace('/profile');
    }
  };

  return (
    <section>
      <LoginForm
        onSubmit={handleAuth}
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
      />
      {isSigningUp ? (
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/signup">Sign Up</Link>
        </p>
      )}
    </section>
  );
}
