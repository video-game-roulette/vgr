import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from '../Auth/AuthButton/AuthButton';
import { useUser } from '../../context/UserContext';

export default function Header() {

  const { user } = useUser();


  return (
    <>
      <header className="header">
        <Link to="/" className="homelink">
          <mark
            style={{
              backgroundColor: 'red',
            }}
          >
            VGR(home)
          </mark>
        </Link>


        {user?.email ? `Signed in as ${user?.email}` : 'Not Signed In'}

        <button className="signbutton">
          <AuthButton />
        </button>
      </header>
      <hr></hr>
    </>
  );
}
