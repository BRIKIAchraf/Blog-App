import { Route, Router } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route  path='/login' >
            <h1>register</h1>
          </Route>
          <Route path='/register'>
           <h1>Login</h1>
          </Route>
          {/* this is the defualt route , is this laste route  */}
          <Route path='/'>
            <Header/>
           <h1>Home</h1>
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
