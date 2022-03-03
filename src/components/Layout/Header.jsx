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
<<<<<<< HEAD
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
=======
    <header className="flex flex-row mt-5">
      <Link to="/">
        <p className="font-black text-slate-200 text-2xl ml-5">VGR</p>
      </Link>
      {user ? (
        <p className="text-slate-200 block font-bold ml-8 w-40 text-xl">
          Signed in as {user}
        </p>
      ) : (
        <p className="text-slate-200 block font-bold ml-20 text-xl">
          Not Signed In
        </p>
      )}
      {user ? (
        <Link to="/">
          <button
            className="w-70 text-slate-200 text-xl block font-bold ml-8 border-4 border-black p-1"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="w-70 text-slate-200 block font-bold ml-10 text-xl border-4 border-black p-1">
            Sign In
          </button>
        </Link>
      )}
    </header>
>>>>>>> 2fb743ab1a0bc68dc927a38bbdbe2ec44e5f74eb
  );
}
