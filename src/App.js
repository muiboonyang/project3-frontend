import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginContext from "./context/login-context";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import CreateRequest from "./pages/CreateRequest";
import SearchResults from "./pages/SearchResults";
import TaskDetails from "./components/TaskDetails";
import MyTasks from "./pages/MyTasks";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profileName, setProfileName] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5001/sessions");
    const data = await res.json();
    console.log(data);
  };

  return (
    <LoginContext.Provider
      value={{
        profileName,
        setProfileName,
        loggedIn,
        setLoggedIn,
        handleLogin,
      }}
    >
      <BrowserRouter>
        <NavBar />
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createrequest" exact component={CreateRequest} />
          <Route path="/search/:type" exact component={SearchResults} />
          <Route path="/mytasks" exact component={MyTasks} />
          <Route path="/search/:type/:id" exact component={TaskDetails} />
          <Route path="/register" exact component={CreateAccount} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </LoginContext.Provider>
  );
};

export default App;
