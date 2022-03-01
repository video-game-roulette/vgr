import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useUser();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/profile' } };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Sign In</h2>
    </div>
  );
}
