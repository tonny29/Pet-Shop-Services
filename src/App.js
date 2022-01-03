import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Aboutus from './Pages/Aboutus/Aboutus';
=======
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
>>>>>>> 1848c272b27386eb7a3f44395dcb7100667ab395
import HomeMain from './Pages/HomeMain/HomeMain';
import Login from './Pages/Login/Login';
import Navigation from './Pages/Navigation/Navigation';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <HomeMain></HomeMain>
          </Route>
          <Route path="/home">
            <HomeMain></HomeMain>
          </Route>
          <Route path="/aboutus">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
