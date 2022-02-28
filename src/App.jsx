import './App.css'; /* Global CSS */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
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
            <Signup />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/roulette">
            <Roulette />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/library/:gameid">
            <Game />
          </Route>
          <Route path="/library/addgame">
            <AddEdit />
          </Route>
          <Route path="/library/edit/:gameid">
            <AddEdit />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
