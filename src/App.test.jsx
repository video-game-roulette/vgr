import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { GameProvider } from './context/GameContext';
import { UserProvider } from './context/UserContext';

test('Testing if homepage renders all the correct content in both the header and the body', () => {
  // const container =
  render(
    <MemoryRouter>
      <UserProvider>
        <GameProvider>
          <App />
        </GameProvider>
      </UserProvider>
    </MemoryRouter>
  );

  const logo = screen.getByText(/vgr/i);
  const isSignedIn = screen.getByText(/not signed in/i);
  const signInBtn = screen.getByRole('button', { name: /sign in/i });
  const heading = screen.getByRole('heading', { name: /video game roulette/i });
  const intro = screen.getByText(
    /are you bored of the game you're currently playing\? are you having trouble trying to decide what game to play next\? try out our amazing video game roulette app that gives you an unbiased random game to play next out of a list of games that you have!/i
  );
  const findGameBtn = screen.getByRole('button', { name: /find a game/i });

  expect(logo).toBeInTheDocument();
  expect(isSignedIn).toBeInTheDocument();
  expect(signInBtn).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(intro).toBeInTheDocument();
  expect(findGameBtn).toBeInTheDocument();
  // expect(container).toMatchSnapshot();
});
