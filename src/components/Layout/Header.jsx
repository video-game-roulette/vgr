import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/user';

export default function Header() {
  const { user, setUser } = useUser();
  const handleLogout = () => {
    signOutUser();
    setUser({});
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="homelink">
          <p className="font-black text-slate-200">VGR</p>
        </Link>
        {user ? (
          <p className="signedas">Signed in as {user}</p>
        ) : (
          <p className="text-slate-200 block font-bold mb-2">Not Signed In</p>
        )}
        {user ? (
          <Link to="/">
            <button className="w-70 text-slate-200" onClick={handleLogout}>
              Sign Out
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="w-70 text-slate-200 block font-bold mb-2">
              Sign In
            </button>
          </Link>
        )}
      </header>
    </>
  );
}
