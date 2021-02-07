import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/landing" exact component={LandingPage} />
        <Route path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
