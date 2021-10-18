import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Details from './components/Details/Details';
import Feature from './components/Feature/Feature';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';




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

            <Route path="/register">
              <Register></Register>
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
