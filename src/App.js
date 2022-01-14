import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import NewRequest from "./pages/NewRequest";
import SearchResults from "./pages/SearchResults";
import Tasks from "./pages/MyTasks";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAcount";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/newrequest" exact component={NewRequest} />
        <Route path="/search/:type" exact component={SearchResults} />
        <Route path="/tasks" exact component={Tasks} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={CreateAccount} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
