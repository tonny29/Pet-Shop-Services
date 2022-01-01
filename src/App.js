import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navigation from './Pages/Navigation/Navigation';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
