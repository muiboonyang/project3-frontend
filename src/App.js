import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Requests from "./pages/Requests";
import SearchResults from "./pages/SearchResults";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/requests" exact component={Requests} />
        <Route path="/search" exact component={SearchResults} />
        <Route path="/tasks" exact component={Tasks} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
