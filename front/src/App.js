import Dashboard from './Components/Dashboard'
import { Switch, Route } from 'react-router-dom'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
