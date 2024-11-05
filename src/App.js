import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CountryView from './CountryView';
import NotFound from './NotFound';
import CountryViewByCode from './CountryViewByCode';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path="/CountryView/:name">
              <CountryView/>
            </Route>
            <Route  path="/CountryViewByCode/:code">
              <CountryViewByCode/>
            </Route>
            <Route path="/*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
