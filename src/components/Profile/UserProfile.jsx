import React from 'react';

import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function UserProfile({ games }) {
  const { user } = useUser();
  console.log('games', games);

  return (
    <div>
      <h1>Welcome {user}</h1>
      <Link to="/roulette">
        <button className="border-2 border-sky-500">Find A Game</button>
      </Link>
      <Link to="/library">
        <button className="border-2 border-sky-500">Game Library</button>
      </Link>
      <Link to="/library/addgame">
        <button className="border-2 border-sky-500">Add Game</button>
      </Link>
      <div>
        {games.map((game) => (
          <div key={game.id}>
            <h1>{game.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
