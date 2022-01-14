import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import NewRequest from "./pages/NewRequest";
import SearchResults from "./pages/SearchResults";
import MyTasks from "./pages/MyTasks";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/newrequest" exact component={NewRequest} />
        <Route path="/search/:type" exact component={SearchResults} />
        <Route path="/mytasks" exact component={MyTasks} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
