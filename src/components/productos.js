import React from 'react'
import {Element} from 'react-scroll'
import productos from '../productos/index'
import {Link} from 'react-router-dom'

const ProductosL = (props)=>{
    if(!props.id){
        return(
            <Element name='products'>
    
            <div className="container-p min-h-screen p-3 pb-20 pt-24 block m-auto">
      
              <div className="text-center letrahoney text-4xl bx-shadown-black bg-white">
                  NUESTROS PRODUCTOS!
              </div>
              <div className="h-full mt-5 w-full p-2 overflow-hidden">
                  {productos.map(u=>
                      <Link to={`/producto/${u.id}`} key={u.id} className="lg:w-30p bg-white sm:w-45p w-full float-left p-2 bx-shadown-black sm:ml-6 sm:mt-0 mt-5 sm:mt-3 h-120">
                          <div className="h-10p letrahoney tracking-widest text-2xl text-center">
                              {u.nombre}
                          </div>
                          <div className="h-80p">
                              <img className="bloc m-auto h-full" alt='img productos' src={u.imagen}/>
                          </div>
                          <div className="h-10p flex justify-center items-center tracking-wides letrahoney text-2xl">
                              $ {u.precio}
                          </div>
                       </Link>
                      )}
              </div>
            </div>
            </Element> 
        )
    }else{
        return(
            <Element name='products'>
    
            <div className="container-p min-h-screen p-3 pb-20 pt-24 block m-auto">
      
              <div className="text-center letrahoney sm:text-4xl text-3xl bx-shadown-black bg-white">
                  NUESTROS PRODUCTOS!
              </div>
              <div className="h-full mt-5 w-full p-2 overflow-hidden">
                  {productos.map(u=>
                      <Link to={`/producto/${u.id}`} onClick={props.changeId} key={u.id}  className="lg:w-30p bg-white sm:w-45p w-full float-left p-2 bx-shadown-black sm:ml-6 sm:mt-0 mt-5 sm:mt-3 h-120">
                          <div className="h-10p letrahoney tracking-widest text-2xl text-center">
                              {u.nombre}
                          </div>
                          <div className="h-80p">
                              <img alt='img productos' className="bloc m-auto h-full" src={u.imagen}/>
                          </div>
                          <div className="h-10p flex justify-center items-center tracking-wides letrahoney text-2xl">
                              $ {u.precio}
                          </div>
                       </Link>
                      )}
              </div>
            </div>
            </Element> 
        )
    }

}

export default ProductosL