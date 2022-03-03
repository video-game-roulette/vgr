import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { GameProvider } from './context/GameContext';
import { UserProvider } from './context/UserContext';
import userEvent from '@testing-library/user-event';

test('Testing if homepage renders all the correct content in both the header and the body', () => {
  // const container =
  render(
    <UserProvider>
      <GameProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GameProvider>
    </UserProvider>
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
    <UserProvider>
      <GameProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GameProvider>
    </UserProvider>
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
    <UserProvider>
      <GameProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GameProvider>
    </UserProvider>
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
  // expect(container).toMatchSnapshot();
});

test('testing that the about us page renders', () => {
  // const container =
  render(
    <UserProvider>
      <GameProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GameProvider>
    </UserProvider>
  );

  const footer = screen.getByRole('link', { name: /about us/i });
  userEvent.click(footer);

  const heading = screen.getByRole('heading', { name: /about the creators/i });
  const andrew = screen.getByRole('heading', { name: /andrew/i });
  const andrewInfo = screen.getByText(
    /from amatuer pro triathlete to a fullstack developer base in portland, or, andrew was instrumental in the team sucessefully completeing the project on time, and above expectation\. core design principles and a tailwind styler, andrew helped create the overall style of the app\./i
  );
  const mark = screen.getByRole('heading', { name: /mark/i });
  const markInfo = screen.getByText(
    /the up and coming software developer from miami, florida\. mark built out functional buttons that communicated with the database and handled profile information and style\. mark’s mind is designed to understand development at a fundamental level and is a solid and reliable member of the team\./i
  );

  expect(heading).toBeInTheDocument();
  expect(andrew).toBeInTheDocument();
  expect(andrewInfo).toBeInTheDocument();
  expect(mark).toBeInTheDocument();
  expect(markInfo).toBeInTheDocument();
  // expect(container).toMatchSnapshot();
});

test('testing login functionality and the profile view', async () => {
  // const container =
  render(
    <UserProvider>
      <GameProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GameProvider>
    </UserProvider>
  );

  const signInBtn = screen.getByRole('button', { name: /header sign in/i });
  userEvent.click(signInBtn);

  const emailInput = screen.getByRole('textbox', { name: /email:/i });
  const email = 'ajoy267@gmail.com';
  userEvent.type(emailInput, email);

  const passwordInput = screen.getByLabelText(/password:/i);
  const password = '12345678';
  userEvent.type(passwordInput, password);

  const signinFormBtn = screen.getByRole('button', { name: /sign in button/i });
  userEvent.click(signinFormBtn);

  const isSignedIn = await screen.findByText(
    /signed in as ajoy267@gmail\.com/i
  );
  const signOutBtn = screen.getByRole('button', { name: /sign out/i });
  const heading = await screen.findByRole('heading', {
    name: /welcome ajoy267@gmail\.com/i,
  });
  const findGame = screen.getByRole('button', { name: /find a game/i });
  const addGame = screen.getByRole('button', { name: /add game/i });
  const game1 = screen.getByRole('heading', { name: /test5/i });
  const game2 = screen.getByRole('heading', { name: /test6/i });
  const footer = screen.getByRole('link', { name: /about us/i });

  expect(isSignedIn).toBeInTheDocument();
  expect(signOutBtn).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(findGame).toBeInTheDocument();
  expect(addGame).toBeInTheDocument();
  expect(game1).toBeInTheDocument();
  expect(game2).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
  // expect(container).toMatchSnapshot();
});

test('testing the functionality of going to our game details page and the view on that page', async () => {
  // const container =
  render(
    <UserProvider>
      <GameProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GameProvider>
    </UserProvider>
  );

  const signInBtn = screen.getByRole('button', { name: /header sign in/i });
  userEvent.click(signInBtn);

  const emailInput = screen.getByRole('textbox', { name: /email:/i });
  const email = 'ajoy267@gmail.com';
  userEvent.type(emailInput, email);

  const passwordInput = screen.getByLabelText(/password:/i);
  const password = '12345678';
  userEvent.type(passwordInput, password);

  const signinFormBtn = screen.getByRole('button', { name: /sign in button/i });
  userEvent.click(signinFormBtn);

  const game1 = await screen.findByRole('heading', { name: /test5/i });
  userEvent.click(game1);

  const gameTitle = await screen.findByRole('heading', { name: /game title/i });
  const gameImg = screen.getByRole('img', { name: /game image/i });
  const gameDescription = screen.getByRole('heading', {
    name: /game description/i,
  });
  const editBtn = screen.getByRole('link', { name: /edit/i });
  const deleteBtn = screen.getByRole('link', { name: /delete game/i });

  expect(gameTitle).toBeInTheDocument();
  expect(gameImg).toBeInTheDocument();
  expect(gameDescription).toBeInTheDocument();
  expect(editBtn).toBeInTheDocument();
  expect(deleteBtn).toBeInTheDocument();
  // expect(container).toMatchSnapshot();
});

test('testing that the add btn works and renders the add game form', async () => {
  // const container =
  render(
    <UserProvider>
      <GameProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GameProvider>
    </UserProvider>
  );

  const signInBtn = screen.getByRole('button', { name: /header sign in/i });
  userEvent.click(signInBtn);

  const emailInput = screen.getByRole('textbox', { name: /email:/i });
  const email = 'ajoy267@gmail.com';
  userEvent.type(emailInput, email);

  const passwordInput = screen.getByLabelText(/password:/i);
  const password = '12345678';
  userEvent.type(passwordInput, password);

  const signinFormBtn = screen.getByRole('button', { name: /sign in button/i });
  userEvent.click(signinFormBtn);

  const addGameBtn = await screen.findByRole('button', { name: /add game/i });
  userEvent.click(addGameBtn);

  const titleInput = await screen.findByRole('textbox', { name: /title:/i });
  const descriptionInput = screen.getByRole('textbox', {
    name: /description:/i,
  });
  const imgInput = screen.getByRole('textbox', { name: /image link:/i });
  const saveGame = screen.getByRole('button', { name: /save game/i });
  const backLink = screen.getByRole('link', { name: /back to profile/i });

  expect(titleInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(imgInput).toBeInTheDocument();
  expect(saveGame).toBeInTheDocument();
  expect(backLink).toBeInTheDocument();
  // expect(container).toMatchSnapshot();
});

test('testing that the edit btn brings you to the edit view', async () => {
  // const container =
  render(
    <UserProvider>
      <GameProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GameProvider>
    </UserProvider>
  );

  const signInBtn = screen.getByRole('button', { name: /header sign in/i });
  userEvent.click(signInBtn);

  const emailInput = screen.getByRole('textbox', { name: /email:/i });
  const email = 'ajoy267@gmail.com';
  userEvent.type(emailInput, email);

  const passwordInput = screen.getByLabelText(/password:/i);
  const password = '12345678';
  userEvent.type(passwordInput, password);

  const signinFormBtn = screen.getByRole('button', { name: /sign in button/i });
  userEvent.click(signinFormBtn);

  const game1 = await screen.findByRole('heading', { name: /test5/i });
  userEvent.click(game1);

  const editBtn = await screen.findByRole('link', { name: /edit/i });
  userEvent.click(editBtn);

  const titleInput = await screen.findByRole('textbox', { name: /title:/i });
  const descriptionInput = screen.getByRole('textbox', {
    name: /description:/i,
  });
  const imgInput = screen.getByRole('textbox', { name: /image link:/i });
  const saveGame = screen.getByRole('button', { name: /save game/i });
  const backLink = screen.getByRole('link', { name: /back to profile/i });

  expect(titleInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(imgInput).toBeInTheDocument();
  expect(saveGame).toBeInTheDocument();
  expect(backLink).toBeInTheDocument();
  // expect(container).toMatchSnapshot();
});

test('testing the find a game view', async () => {
  render(
    <UserProvider>
      <GameProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GameProvider>
    </UserProvider>
  );

  const signInBtn = screen.getByRole('button', { name: /header sign in/i });
  userEvent.click(signInBtn);

  const emailInput = screen.getByRole('textbox', { name: /email:/i });
  const email = 'ajoy267@gmail.com';
  userEvent.type(emailInput, email);

  const passwordInput = screen.getByLabelText(/password:/i);
  const password = '12345678';
  userEvent.type(passwordInput, password);

  const signinFormBtn = screen.getByRole('button', { name: /sign in button/i });
  userEvent.click(signinFormBtn);

  const findGame = await screen.findByRole('button', { name: /find a game/i });
  userEvent.click(findGame);

  const gameTitle = await screen.findByRole('heading', { name: /game title/i });
  const gameImg = screen.getByRole('img', { name: /game image/i });
  const gameDescription = screen.getByRole('heading', {
    name: /game description/i,
  });

  expect(gameTitle).toBeInTheDocument();
  expect(gameImg).toBeInTheDocument();
  expect(gameDescription).toBeInTheDocument();
});

// test('testing that I can add a game', async () => {
//   render(
//     <MemoryRouter>
//       <UserProvider>
//         <GameProvider>
//           <App />
//         </GameProvider>
//       </UserProvider>
//     </MemoryRouter>
//   );

//   const signInBtn = screen.getByRole('button', { name: /header sign in/i });
//   userEvent.click(signInBtn);

//   const emailInput = screen.getByRole('textbox', { name: /email:/i });
//   const email = 'ajoy267@gmail.com';
//   userEvent.type(emailInput, email);

//   const passwordInput = screen.getByLabelText(/password:/i);
//   const password = '12345678';
//   userEvent.type(passwordInput, password);

//   const signinFormBtn = screen.getByRole('button', { name: /sign in button/i });
//   userEvent.click(signinFormBtn);

//   const addGameBtn = await screen.findByRole('button', { name: /add game/i });
//   userEvent.click(addGameBtn);

//   const titleInput = await screen.findByRole('textbox', { name: /title:/i });
//   const title = 'Gta';
//   userEvent.type(titleInput, title);

//   const descriptionInput = screen.getByRole('textbox', {
//     name: /description:/i,
//   });
//   const description = 'its a game';
//   userEvent.type(descriptionInput, description);

//   const imgInput = screen.getByRole('textbox', { name: /image link:/i });
//   const img = 'this is an image';
//   userEvent.type(imgInput, img);

//   const saveGame = screen.getByRole('button', { name: /save game/i });
//   userEvent.click(saveGame);

//   const newGame = await screen.findByRole('heading', { name: /gta/i });

//   expect(newGame).toBeInTheDocument();
// });

// test('testing that our delete btn deletes a game', async () => {
//   render(
//     <MemoryRouter>
//       <UserProvider>
//         <GameProvider>
//           <App />
//         </GameProvider>
//       </UserProvider>
//     </MemoryRouter>
//   );

//   const signInBtn = screen.getByRole('button', { name: /header sign in/i });
//   userEvent.click(signInBtn);

//   const emailInput = screen.getByRole('textbox', { name: /email:/i });
//   const email = 'ajoy267@gmail.com';
//   userEvent.type(emailInput, email);

//   const passwordInput = screen.getByLabelText(/password:/i);
//   const password = '12345678';
//   userEvent.type(passwordInput, password);

//   const signinFormBtn = screen.getByRole('button', { name: /sign in button/i });
//   userEvent.click(signinFormBtn);

//   const game = await screen.findByRole('heading', { name: /gta/i });
//   userEvent.click(game);

//   const deleteBtn = await screen.findByRole('link', { name: /delete game/i });
//   userEvent.click(deleteBtn);

//   screen.debug();
//   const gameDelete = await screen.findByRole('heading', { name: /gta/i });

//   expect(gameDelete).not.toBeInTheDocument();
// });
