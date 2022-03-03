import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function UserProfile({ game }) {
  const { user } = useUser();
  const data = game.data;

  //Randomizer Function
  const random = Math.floor(Math.random() * data.length);
  const randomGame = data[random].id;

  return (
    <div>
      <h1>Welcome {user}</h1>
      <Link to={`/profile/${randomGame}`}>
        <button className="border-2 border-sky-500">Find A Game</button>
      </Link>

      <Link to="/library/addgame">
        <button className="border-2 border-sky-500">Add Game</button>
      </Link>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <Link to={`/profile/${item.id}`}>
              <h1>{item.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
