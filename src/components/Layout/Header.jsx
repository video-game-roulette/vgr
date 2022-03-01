import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/user';

export default function Header() {
  const { user, setUser } = useUser();

  return (
    <>
      <header className="header">
        <Link to="/" className="homelink">
          <p className="bg-red-600">VGR</p>
        </Link>

        {user ? (
          <p className="signedas">Signed in as {user}</p>
        ) : (
          <p className="text-slate-200">Not Signed In</p>
        )}
        {user ? (
          <button
            className="w-70 text-slate-200"
            onClick={async () => {
              await signOutUser();
              setUser({});
            }}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="w-70 text-slate-200">Sign In</button>
          </Link>
        )}
      </header>
    </>
  );
}
