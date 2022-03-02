import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import UserProfile from '../../components/Profile/UserProfile';
import { fetchGames } from '../../services/game';

export default function Profile() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log('games', games);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGames();
      setGames(data);
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
      <UserProfile games={games} />
    </div>
  );
}
