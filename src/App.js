import React from 'react';
import Inicio from './components/inicio'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Producto from './components/producto_id'
import NotFound from './components/NotFound'
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Inicio}/>
        <Route exact path='/producto/:id' component={Producto}/>
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
