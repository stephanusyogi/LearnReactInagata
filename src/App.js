import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog}/>
    </Router>
  );
}

export default App;
