import Dashboard from './Components/Dashboard'
import Project from './Components/Project'
import { Switch, Route } from 'react-router-dom'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/project" component={Project}/>
      </Switch>
    </div>
  );
}

export default App;
