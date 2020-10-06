import React from 'react';
import './App.css';
import Index from './pages/Index/Index'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import Recipe from './pages/Recepie/Recipe'
import {RandomMealProvider} from './context/Random_Meal_Context'
import Categories from './pages/Categories/Categories'
import Category from './pages/Category/Category'

function App() {
  return (
    <RandomMealProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <br/>
        <br/>
        <br/>
         <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/recipe' exact component={Recipe} />
            <Route path='/categories' exact component={Categories} />
            <Route path='/category' exact component={Category} />
         </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
    </RandomMealProvider>
  );
}

export default App;
