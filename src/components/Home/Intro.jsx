import React from 'react';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <div className="flex flex-col">
<<<<<<< HEAD
      <h1 className="flex justify-center my-10 font-black text-slate-200 text-3xl">
        Video Game Roulette
      </h1>
      <p className="flex justify-center mb-10 px-5 font-bold text-slate-200 text-xl">
=======
      <h1 className="flex justify-center my-5 text-slate-200">
        Video Game Roulette
      </h1>
      <p className="flex justify-center px-5 text-slate-200">
>>>>>>> 40210620dc09d0f835e9eaaeaecc4d13f744e353
        Are you bored of the game you're currently playing? Are you having
        trouble trying to decide what game to play next? Try out our amazing
        video game roulette app that gives you an unbiased random game to play
        next out of a list of games that you have!
      </p>
      <Link to="/profile">
<<<<<<< HEAD
        <button className="flex border-4 font-bold bg-indigo-400 m-auto text-slate-200 rounded-md text-2xl p-2 mb-5">
=======
        <button className="flex border-2 border-sky-500 m-auto text-slate-200">
>>>>>>> 40210620dc09d0f835e9eaaeaecc4d13f744e353
          Find A Game
        </button>
      </Link>
    </div>
  );
}
