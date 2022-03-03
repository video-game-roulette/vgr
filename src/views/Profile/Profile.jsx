import React, { useEffect, useState } from 'react';
import UserProfile from '../../components/Profile/UserProfile';
import { useGame } from '../../context/GameContext';
import { getUserGame } from '../../services/game';

export default function Profile() {
  const { game, setGame } = useGame();
  const [loading, setLoading] = useState(true);

  console.log('game', game);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserGame();
      setGame(data);
      setLoading(false);
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
