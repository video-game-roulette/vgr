import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { GameProvider } from './context/GameContext';
import { UserProvider } from './context/UserContext';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';

const mockAuth = {
  access_token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjQ2MzM0MTc0LCJzdWIiOiIyZGE3NDlhZi0wODAyLTQ3NTEtYjEzNC04M2Q1YjIyOWZkNjgiLCJlbWFpbCI6ImFqb3kyNjdAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIn0.B1MGEm4zHNs-OvXFRmDbpynG-54tD1BX6JDmf42buYQ',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'hXAFfjlSsrHOovy-_8-dFg',
  user: {
    id: '2da749af-0802-4751-b134-83d5b229fd68',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'ajoy267@gmail.com',
    email_confirmed_at: '2022-03-01T22:54:56.397475Z',
    phone: '',
    confirmed_at: '2022-03-01T22:54:56.397475Z',
    last_sign_in_at: '2022-03-03T18:02:54.550804937Z',
    app_metadata: {
      provider: 'email',
      providers: ['email'],
    },
    user_metadata: {},
    identities: [
      {
        id: '2da749af-0802-4751-b134-83d5b229fd68',
        user_id: '2da749af-0802-4751-b134-83d5b229fd68',
        identity_data: {
          sub: '2da749af-0802-4751-b134-83d5b229fd68',
        },
        provider: 'email',
        last_sign_in_at: '2022-03-01T22:54:56.394903Z',
        created_at: '2022-03-01T22:54:56.394945Z',
        updated_at: '2022-03-01T22:54:56.394948Z',
      },
    ],
    created_at: '2022-03-01T22:54:56.39229Z',
    updated_at: '2022-03-03T18:02:54.551823Z',
  },
};

const server = setupServer(
  rest.get(
    `https://xkansgoeqtedqojhrwta.supabase.co/auth/v1/token?grant_type=password`,
    (req, res, ctx) => {
      return res(ctx.json(mockAuth));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

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
  const signInBtn = screen.getByRole('button', { name: /header sign in/i });
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

test('testing the view of the login page', () => {
  //const container =
  render(
    <MemoryRouter>
      <UserProvider>
        <GameProvider>
          <App />
        </GameProvider>
      </UserProvider>
    </MemoryRouter>
  );
  const firstSignInBtn = screen.getByRole('button', {
    name: /header sign in/i,
  });
  userEvent.click(firstSignInBtn);

  const emailInput = screen.getByRole('textbox', { name: /email:/i });
  const passwordInput = screen.getByLabelText(/password:/i);
  const signinFormBtn = screen.getByRole('button', { name: /sign in button/i });
  const signupQuestion = screen.getByText(/need an account\?/i);
  const signupLink = screen.getByRole('link', { name: /sign up/i });
  const backHome = screen.getByRole('link', { name: /back to home/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(signinFormBtn).toBeInTheDocument();
  expect(signupQuestion).toBeInTheDocument();
  expect(signupLink).toBeInTheDocument();
  expect(backHome).toBeInTheDocument();
  // expect(container).toMatchSnapshot();
});

test('testing the view for the signup page', () => {
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

  const firstSignInBtn = screen.getByRole('button', {
    name: /header sign in/i,
  });
  userEvent.click(firstSignInBtn);

  const signupLink = screen.getByRole('link', { name: /sign up/i });
  userEvent.click(signupLink);

  const emailInput = screen.getByRole('textbox', { name: /email:/i });
  const passwordInput = screen.getByLabelText(/password:/i);
  const signinFormBtn = screen.getByRole('button', { name: /sign in button/i });
  const signinQuestion = screen.getByText(/already have an account\?/i);
  const backHome = screen.getByRole('link', { name: /back to home/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(signinFormBtn).toBeInTheDocument();
  expect(signinQuestion).toBeInTheDocument();
  expect(backHome).toBeInTheDocument();
});

// test('testing mockauth', () => {
//   render(
//     <MemoryRouter>
//       <UserProvider>
//         <GameProvider>
//           <App />
//         </GameProvider>
//       </UserProvider>
//     </MemoryRouter>
//   );

//   const signInBtn = screen.getByRole('button', {  name: /header sign in/i})
//   userEvent.click(signInBtn);

//   const emailInput = screen.getByRole('textbox', { name: /email:/i });
//   const email = 'ajoy267@gmail.com';
//   userEvent.type(emailInput, email);

//   const passwordInput = screen.getByLabelText(/password:/i);
//   const password = '12345678';
//   userEvent.type(passwordInput, password);

//   const signinFormBtn = screen.getByRole('button', { name: /sign in button/i });
//   userEvent.click(signinFormBtn);
// });
