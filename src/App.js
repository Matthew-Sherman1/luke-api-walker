// import logo from './logo.svg';

import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <BrowserRouter>
      <Search />
      <Switch>
        <Route path='/people/:id'>
          <People />
        </Route>
        <Route path='/planets/:id'>
          <Planets />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;