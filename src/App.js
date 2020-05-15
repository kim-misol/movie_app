import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import ListYear from "./routes/ListYear";
import ListDC from "./routes/ListDC";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/sortby_year" component={ListYear} />
      <Route path="/sortby_rating" component={Home} />
      <Route path="/sortby_download_count" component={ListDC} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;