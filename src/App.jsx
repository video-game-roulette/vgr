import './App.css'; /* Global CSS */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Login from './views/Auth/Login';
import About from './views/AboutUs/About';
import Profile from './views/Profile/Profile';
import Library from './views/Library/Library';
import Game from './views/Library/Game';
import AddEdit from './views/Library/AddEdit';
import { UserProvider } from './context/UserContext';
import { GameProvider } from './context/GameContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

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
              <ProtectedRoute path="/profile">
                <Profile />
              </ProtectedRoute>
              <ProtectedRoute path="/library/edit/:gameid">
                <AddEdit isAdding />
              </ProtectedRoute>
              <ProtectedRoute path="/library/addgame">
                <AddEdit />
              </ProtectedRoute>
              <ProtectedRoute path="/profile/:gameid">
                <Game />
              </ProtectedRoute>
              <ProtectedRoute path="/library">
                <Library />
              </ProtectedRoute>
            </Switch>
            <Footer />
          </Router>
        </GameProvider>
      </UserProvider>
    </main>
  );
}
