import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import UserProfile from '../../components/Profile/UserProfile';
import { useGame } from '../../context/GameContext';
import { fetchGames } from '../../services/game';

export default function Profile() {
  const { game, setGame } = useGame();
  const [loading, setLoading] = useState(true);
  console.log('games', game);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGames();
      setGame(data);
      setLoading(false);
      console.log('data', data);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h2>We Our Getting Your Info</h2>;
  }

  return (
    <div>
      <UserProfile game={game} />
    </div>
  );
}
