import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/user';

export default function Header() {
  const { user, setUser } = useUser();
  const handleLogout = () => {
    signOutUser();
    setUser();
  };

  return (
    <header className="flex flex-row mt-5 pb-2">
      <Link to="/">
        <p className="font-black text-slate-200 text-2xl ml-5">VGR</p>
      </Link>

      {user ? (
        <Link to="/">
          <button
            className="absolute top-0 right-0 mt-4 mr-4 w-70 text-slate-200 block font-bold ml-10 text-xl border-4 bg-indigo-400 rounded p-1"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button
            aria-label="header sign in"
            className="absolute top-0 right-0 mt-4 mr-4 w-70 text-slate-200 block font-bold ml-10 text-xl border-4 bg-indigo-400 rounded p-1"
          >
            Sign In
          </button>
        </Link>
      )}
    </header>
  );
}
