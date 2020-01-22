import React from 'react';
import  HeaderContainer from './components/HeaderContainer/HeaderContainer'
import ProductsListContainer from './components/ProductsListContainer/ProductsListContainer'
import ProductsInfoContainer from './components/ProductsInfoContainer/ProductsInfoContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
       <div className="main-content">
          <div className="container">
            <Router>
            <HeaderContainer />
               <Switch>
                  <Route path="/items/search/:id" exact>
                     <ProductsListContainer />
                  </Route>
                  <Route path="/items/:id" exact>
                     <ProductsInfoContainer />
                  </Route>
               </Switch>
            </Router>
          </div>
       </div>
    </div>
  );
}

export default App;
