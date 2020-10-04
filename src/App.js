import React from 'react';
import './App.css';
import Index from './pages/Index/Index'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import Recipe from './pages/Recepie/Recipe'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <br/>
        <br/>
        <br/>
         <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/recipe' exact component={Recipe} />
         </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
