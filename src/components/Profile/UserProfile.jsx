import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function UserProfile({ game }) {
  const { user } = useUser();
  const data = game.data;
  console.log('games', game);

  return (
    <div>
      <h1 className="font-extrabold text-slate-100 flex justify-center">
        Welcome {user}
      </h1>
      <Link to={`/library/9`}>
        <button className="bg-slate-100 rounded-md font-bold text-blue-600 px-1 ">
          Find A Game
        </button>
      </Link>

      <Link to="/library/addgame">
        <button className="bg-indigo-500 rounded-md font-bold text-slate-100 px-1 left-2">
          Add Game
        </button>
      </Link>
      <div className="flex flex-wrap">
        {data.map((item) => (
          <div
            className=" pt-3 flex flex-col w-1/2 sm:w-1/3 mt-5 "
            key={item.id}
          >
            <Link to={`/profile/${item.id}`}>
              <img
                className="object-cover h-28 w-28 rounded-md flex columns-2 mt-5"
                src={item.image}
              />
              <h1 className="font-bold px-2 text-grey-700">{item.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
