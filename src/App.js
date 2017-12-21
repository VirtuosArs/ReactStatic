import React, { Component } from 'react';
import "./Assets/css/default.min.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import Detail from './components/pages/detail';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Header />

       <Route exact path='/' component={ HomePage } />
       <Route exact path='/detail' component={ Detail } />
       
       <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
