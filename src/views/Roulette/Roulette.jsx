import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Randomizer from '../../components/Roulette/Randomizer';
import './Roulette.css';

// const { user }
// const { game }
// const [loading, setLoading] = useState(false);

export default function Roulette() {
  return (
    <>
      <Link to="/profile">
        <button className="back-btn">Back</button>
      </Link>
      <Randomizer />
    </>
  );
}
