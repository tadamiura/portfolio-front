import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import LoadingScreen from './Components/LoadingScreen'
import Project from './Components/Project'

import './App.scss';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path='/project/:id' render={(props) => <Project {...props} />}/>
      </Switch>
    </div>

    ) : (
      <LoadingScreen />
    )}  
    </>
  );
}

export default App;
