import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function UserProfile({ game }) {
  const { user } = useUser();
  const data = game.data;
  console.log('games', game);

  return (
    <div>
      <h1>Welcome {user}</h1>
      <Link to={`/library/9`}>
        <button className="border-2 border-sky-500">Find A Game</button>
      </Link>
      <Link to="/library">
        <button className="border-2 border-sky-500">Game Library</button>
      </Link>
      {/* Move to game Library */}
      <Link to="/library/addgame">
        <button className="border-2 border-sky-500">Add Game</button>
      </Link>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
      {/* Delete after Edit works */}
      <Link to="/library/edit/9">
        <button className="border-2 border-sky-500">edit</button>
      </Link>
    </div>
  );
}
