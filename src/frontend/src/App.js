import './App.scss';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = "/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>
          <Route path = "/teams/:teamName">
            <TeamPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
