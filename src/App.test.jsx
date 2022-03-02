import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { GameProvider } from './context/GameContext';
import { UserProvider } from './context/UserContext';

test('testing app', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <GameProvider>
          <App />
        </GameProvider>
      </UserProvider>
    </MemoryRouter>
  );
  const heading = screen.getByRole('heading', { name: /video game roulette/i });
  expect(heading).toBeInTheDocument();
});
