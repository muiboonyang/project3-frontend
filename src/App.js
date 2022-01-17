import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginContext from "./context/login-context";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import NewRequest from "./pages/NewRequest";
import SearchResults from "./pages/SearchResults";
import TaskDetails from "./components/TaskDetails";
import MyTasks from "./pages/MyTasks";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAcount";

const App = () => {
  const [loginStatus, setLoginStatus] = useState();
  const handleLogin = async () => {
    const res = await fetch("http://localhost:5001/sessions");
    const data = await res.json();
    console.log(data);
    setLoginStatus(data.username);
  };

  return (
    <LoginContext.Provider value={{ loginStatus }}>
      <BrowserRouter>
        <NavBar />
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/newrequest" exact component={NewRequest} />
          <Route path="/search/:type" exact component={SearchResults} />
          <Route path="/mytasks" exact component={MyTasks} />
          <Route path="/search/:type/:id" exact component={TaskDetails} />
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register" exact component={CreateAccount} />
        </Switch>
      </BrowserRouter>
    </LoginContext.Provider>
  );
};

export default App;
