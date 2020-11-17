import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.scss";
import "@/scss/reset.scss";

import Fixedbar from "@/components/Fixedbar";

import Navbar from "@/page/Navbar";
import Home from "@/page/Home";
import Result from "@/page/Result";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Fixedbar} />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/result" exact component={Result} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
