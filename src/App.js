import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Aboutus from './Pages/Aboutus/Aboutus';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import HomeMain from './Pages/HomeMain/HomeMain';
import Login from './Pages/Login/Login';
import Navigation from './Pages/Navigation/Navigation';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <HomeMain></HomeMain>
          </Route>
          <Route path="/home">
            <HomeMain></HomeMain>
          </Route>
          <Route path="/Services">
            <Services></Services>
          </Route>
          <Route path="/aboutus">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/detail/:detailId">
          <FoodDetails></FoodDetails>
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
