import React from 'react';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <div>
      <h1>Video Game Roulette</h1>
      <p>
        Are you bored of the game you're currently playing? Are you having
        trouble trying to decide what game to play next? Try out our amazing
        video game roulette app that gives you an unbiased random game to play
        next out of a list of games that you have!
      </p>
      <Link to="/profile">
        <button className="border-2 border-sky-500">Find A Game</button>
      </Link>
    </div>
  );
}
