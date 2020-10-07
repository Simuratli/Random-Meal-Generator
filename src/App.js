import React,{Suspense,lazy} from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import Recipe from './pages/Recepie/Recipe'
import {RandomMealProvider} from './context/Random_Meal_Context'
import Categories from './pages/Categories/Categories'
import Category from './pages/Category/Category'
import Search from './pages/Search/Search'
import Area from './pages/Area/Area'
import AreaResult from './pages/AreaResult/AreaResult'
import CategoriesContextProvider from './context/CategoriesContext'
import SpecialCategoryContextProvider from './context/SpecialCategoryContext'

const Index = lazy(()=>{
  return import('./pages/Index/Index')
})


function App() {
  return (
   
    <RandomMealProvider>
    <BrowserRouter>
      <CategoriesContextProvider>
        <SpecialCategoryContextProvider>
      <div className="App">
        <Navbar/>
        <br/>
        <br/>
        <br/>
         <Switch>
            <Route path='/' exact render={
              ()=>{
              <Suspense fallback={<div>Loading...</div>}>
                <Index/>
              </Suspense>
              }
            } />
            <Route path='/recipe' exact component={Recipe} />
            <Route path='/categories' exact component={Categories} />
            <Route path='/category' exact component={Category} />
            <Route path='/search' exact component={Search} />
            <Route path='/areas' exact component={Area} />
            <Route path='/area' exact component={AreaResult} />
         </Switch>
        <Footer/>
      </div>
        </SpecialCategoryContextProvider>
      </CategoriesContextProvider>
    </BrowserRouter>
    </RandomMealProvider>
   
  );
}

export default App;
