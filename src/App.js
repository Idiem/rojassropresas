import React from 'react';
import Inicio from './components/inicio'
import {Router,Route,Switch} from 'react-router-dom'
import Producto from './components/producto_id'
import _404 from './components/NotFound'
import history from './history';

function App() {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/'><Inicio/></Route>
        <Route exact path='/producto/:id'> <Producto/> </Route>
        <Route path="/" component={_404} />
      </Switch>
    </Router>
  );
}

export default App;
