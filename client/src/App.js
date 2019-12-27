import React, {Fragment} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import RouteViews from './Components/RouteViews';

function App() {
  return (
    <Router>
      <Fragment>
      <Navbar/>
       <RouteViews/>
      <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
