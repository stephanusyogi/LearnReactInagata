import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import DetailCard from './components/AllCard/DetailCard';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Pagedummy from './pages/pagedummy';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/detailblog/:slug" component={DetailCard} />
        <Route exact path="/dummy" component={Pagedummy}/>
    </Router>
  );
}

export default App;
