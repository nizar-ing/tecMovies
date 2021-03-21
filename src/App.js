import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Customers from "./components/customers";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className='container mt-3'>
        <Switch>
          <Route path='/movies' component={Movies} />
          <Route path='/customers' component={Customers} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='/not-found'></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
