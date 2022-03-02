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
          <p className="font-black text-slate-200">VGR</p>
        </Link>

        {user?.email ? (
          <p className="text-slate-200">Signed in as {user?.email}</p>
        ) : (
          <p className="text-slate-200 block font-bold mb-2">Not Signed In</p>
        )}
        {user?.email ? (
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
            <button className="w-70 text-slate-200 block font-bold mb-2">
              Sign In
            </button>
          </Link>
        )}
      </header>
    </>
  );
}
