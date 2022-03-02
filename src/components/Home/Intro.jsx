import React from 'react';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center my-10 text-slate-200 text-3xl">
        Video Game Roulette
      </h1>
<<<<<<< HEAD
      <p className="flex justify-center px-5 text-slate-200">
=======
      <p className="flex justify-center mb-10 px-5 text-slate-200 text-xl">
>>>>>>> 2fb743ab1a0bc68dc927a38bbdbe2ec44e5f74eb
        Are you bored of the game you're currently playing? Are you having
        trouble trying to decide what game to play next? Try out our amazing
        video game roulette app that gives you an unbiased random game to play
        next out of a list of games that you have!
      </p>
      <Link to="/profile">
<<<<<<< HEAD
        <button className="flex border-2 border-sky-500 m-auto text-slate-200">
=======
        <button className="flex border-4 border-rose-400 m-auto text-rose-200 text-2xl p-2 mb-5">
>>>>>>> 2fb743ab1a0bc68dc927a38bbdbe2ec44e5f74eb
          Find A Game
        </button>
      </Link>
    </div>
  );
}
