import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Feature from './components/Feature/Feature';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/feature">
              <Feature></Feature>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
