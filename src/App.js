import React from 'react';
import Inicio from './components/inicio'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Producto from './components/producto_id'
import _404 from './components/NotFound'
import {Provider} from 'react-redux'
import store from './store';
import Carrito from './components/carrito'
import ViewCarrito from './components/carritoView'
import VerificarToken from './components/verificarToken'
function App() {
  return (
    <Router>
      <Provider store={store}>
        <VerificarToken>
          <Switch>
            <Route exact path='/' component={Inicio} />
            <Route exact path='/carrito' component={Carrito} />
            <Route exact path='/producto/:id' component={Producto}/>
            <Route path="/" component={_404} />
          </Switch>
          <ViewCarrito/>
        </VerificarToken>
      </Provider>
    </Router>
  );
}

export default App;
