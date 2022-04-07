import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function UserProfile({ game }) {
  const { user } = useUser();
  const data = game.data;

  //Randomizer Function
  // data could be empty (think new users)
  // this throws an error and prevents the entire page from
  // rendering on new users
  // wrap it in a function to prevent this
  const getRandomGame = () => {
    if (data.length) {
      const random = Math.floor(Math.random() * data.length);
      return data[random].id;
    }
  };

  return (
    <div>
      <h1 className="font-extrabold mt-4 mb-2 text-slate-100 flex justify-center">
        Welcome {user.email}
      </h1>
      {getRandomGame() && (
        <Link to={`/profile/${getRandomGame()}`}>
          <button className="bg-slate-100 mt-6 ml-10 rounded-md font-bold text-blue-600 px-1 ">
            Find A Game
          </button>
        </Link>
      )}
      <Link to="/library/addgame">
        <button className="bg-indigo-500 mt-6 rounded-md ml-20 font-bold text-slate-100 px-1 left-2">
          Add Game
        </button>
      </Link>
      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <div
            className=" pt-3 flex flex-col w-1/2 sm:w-1/3 mt-5 "
            key={item.id}
          >
            <Link to={`/profile/${item.id}`}>
              <img
                className="object-cover pl-6 h-30 w-28 rounded-md flex columns-2 mt-5"
                src={item.image}
              />
              <h1 className="font-bold px-2 text-slate-200">{item.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
