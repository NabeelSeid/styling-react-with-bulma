import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'

//Components
import Login from '../Screens/Login'
import Home from '../Screens/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* LOGIN */}
          <Route exact path="/login">
            <Login />
          </Route>

          {/* HOME */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
