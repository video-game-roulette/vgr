import { render, screen } from '@testing-library/react';
import App from './App';

test('testing app', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /video game roulette/i });
  expect(heading).toBeInTheDocument();
});
