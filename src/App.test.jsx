import { render, screen } from '@testing-library/react';
import App from './App';

test('testing app', () => {
  render(<App />);
  const home = screen.getByText(/home/i);
  expect(home).toBeInTheDocument();
});
