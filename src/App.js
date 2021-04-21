import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import Kids from './components/pages/Kids';
import Cart from './components/pages/Cart';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/men' component={Men} />
          <Route path='/women' component={Women} />
          <Route path='/kids' component={Kids} />
          <Route path='/cart' component={Cart} />
          <Route path='/signup' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;