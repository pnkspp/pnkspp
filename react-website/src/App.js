import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import page404 from "./pages/page404/page404";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        {/* <Route path="/" exact /> */}
        <Route component={page404} />
      </Switch>
    </Router>
  );
}

export default App;
