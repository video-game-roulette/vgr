import './App.css'; /* Global CSS */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Login from './views/Auth/Login';

import About from './views/AboutUs/About';
import Profile from './views/Profile/Profile';
import Roulette from './views/Roulette/Roulette';
import Library from './views/Library/Library';
import Game from './views/Library/Game';
import AddEdit from './views/Library/AddEdit';
import { UserProvider } from './context/UserContext';
import { GameProvider } from './context/GameContext';

export default function App() {
  return (
    <main>
      <UserProvider>
        <GameProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Login isSigningUp />
              </Route>
              <Route path="/about-us">
                <About />
              </Route>
              <Route path="/profile/">
                <Profile />
              </Route>
              <Route path="/roulette">
                <Roulette />
              </Route>
              <Route path="/library/addgame">
                <AddEdit />
              </Route>
              <Route path="/library">
                <Library />
              </Route>
              <Route path="/library/:gameid">
                <Game />
              </Route>
              <Route path="/library/edit/:gameid">
                <AddEdit />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </GameProvider>
      </UserProvider>
    </main>
  );
}
