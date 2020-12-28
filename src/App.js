import React from "react";
import PageWrapper from "./components/PageWrapper";

//Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Team from "./components/Pages/Team";
import Contact from "./components/Pages/Contact";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
      </PageWrapper>
    </Router>
  );
}

export default App;
