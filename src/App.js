import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Details from './components/Details/Details';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/details/:serviceId">
            <Details></Details>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
