import React from 'react';
<<<<<<< HEAD

=======
>>>>>>> 2fb743ab1a0bc68dc927a38bbdbe2ec44e5f74eb
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
