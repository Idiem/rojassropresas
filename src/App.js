import React from 'react';
import Inicio from './components/inicio'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Producto from './components/producto_id'
import _404 from './components/NotFound'
import history from './history';

function App() {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Inicio} />
        <Route exact path='/producto/:id' component={Producto}/>
        <Route path="/" component={_404} />
      </Switch>
    </Router>
  );
}

export default App;
