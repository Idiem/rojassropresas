import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import productos from '../productos/index'
import {Element,scroller} from 'react-scroll'
import Header from './header'
import Footer from './footer'
import ProductosL from './productos'
import DocumentTitle from 'react-document-title'
import {AgregarProductoAction} from '../action/index'

const Producto = (props)=>{
    const {id} = useParams()
    const dispactch = useDispatch();
    const ProductosCarrito = useSelector((store)=>store.productos);
    const [product,setProduct] = useState({})
    const ChangeId = ()=>{
        scroller.scrollTo('inicio', {
            smooth: true,
        })
    }
    const CONFIRMAR = async({precio,opciones,nombre,imagen})=>{
        var ids;
        if(ProductosCarrito.length<1){
            ids = ProductosCarrito.length+1
        }else{
            ids = ProductosCarrito[ProductosCarrito.length-1].id + 1;
        }
        const canasta = {
            precio,
            productos:opciones.slice(),
            id:ids,
            nombre,
            imagen
        }
        ProductosCarrito.push(canasta)
        dispactch(AgregarProductoAction(ProductosCarrito));
        props.history.push('/carrito');
    }
    useEffect(()=>{
        const result = productos.find(productos=>productos.id===id);
        setProduct(result)
    },[id]);
    return(
        <DocumentTitle title='Producto | 🌹 RS'>
        <div className="fondogra">
            <Header inicio={false}/>
            {!product.nombre?
            <Element name='inicio' className="p-4 pt-32 pb-0 container-p block m-auto">
                <div className="mt-10 p-5 bx-shadown-black rounded bg-white text-center letrahoney text-3xl tracking-widest"><span>NO SE ENCONTRO ESE PRODUCTO!</span><br/>MIRA DE NUESTROS PRODCUTOS</div>
            </Element>
            :<Element name='inicio' className="sm:pt-24 pt-32">
               <div className="sm:p-24 sm:pt-10 sm:pl-0 sm:pr-0 p-5 sm:h-screen h-auto container-p block m-auto">
                    <div className="sm:p-24 sm:pt-8 sm:pb-0 sm:pl-0 sm:pr-0 h-20p container-p block m-auto">
                        <div className="p-5 block text-center letrahoney tracking-widest text-3xl m-auto bx-shadown-black bg-white rounded">
                            OPCION 1
                        </div>
                    </div>
                <div className="mt-10 p-1 h-80p bg-white sm:flex rounded bx-shadown-black">
                    <div className="sm:w-50p w-full sm:h-full">
                        <img className="sm:h-full sm:w-auto w-full block m-auto" alt='img producto opcion 1' src={product.imagen}/>
                    </div>
                    <div className="sm:w-50p p-5 h-full w-full">
                        <div className="letrahoney sm:h-10p text-3xl text-center tracking-widest">{product.nombre}</div>
                        <div className="sm:h-80p p-5 letrahoney tracking-widest text-size-20">
                            {product.opcion1.map(u=>
                                <div key={u.nombre} className="h-10p sm:text-left text-center">
                                    - {u.cantidad>1?u.cantidad:null} {u.nombre}
                                </div>
                            )}
                        </div>
                        <div className="sm:h-10p sm:flex">
                            <div className="sm:w-50p w-full flex justify-center items-center text-2xl letrahoney tracking-widest">
                                $ {product.precio}
                            </div>
                            <div className="h-full sm:w-50p w-full flex">
                                <button onClick={()=>CONFIRMAR({precio:product.precio,opciones:product.opcion1,nombre:product.nombre,imagen:product.imagen})} className="w-full hbutton h-full text-center letrahoney tracking-widest rounded-bl-full bx-shadown-black bg-orange-600 text-white">AÑADIR CARRITO</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {product.opcion2?
                <div className="sm:p-24 sm:pt-3 sm:pl-0 sm:pr-0 p-5 sm:h-screen h-auto container-p block m-auto">
                    <div className="sm:p-24 sm:pt-8 sm:pb-0 sm:pl-0 sm:pr-0 h-20p container-p block m-auto">
                        <div className="p-5 block text-center letrahoney tracking-widest text-3xl m-auto bx-shadown-black bg-white rounded">
                            OPCION 2
                        </div>
                    </div>
                <div className="mt-10 p-1 h-80p bg-white sm:flex rounded bx-shadown-black">
                    <div className="sm:w-50p w-full sm:h-full">
                        <img className="sm:h-full sm:w-auto w-full block m-auto" alt='img producto opcion 2' src={product.imagen2}/>
                    </div>
                    <div className="sm:w-50p p-5 h-full w-full">
                        <div className="letrahoney sm:h-10p text-3xl text-center tracking-widest">{product.nombre}</div>
                        <div className="sm:h-80p p-5 letrahoney tracking-widest text-size-20">
                            {product.opcion2.map(u=>
                                <div key={u.nombre} className="h-10p sm:text-left text-center">
                                    - {u.cantidad>1?u.cantidad:null} {u.nombre}
                                </div>
                            )}
                        </div>
                        <div className="sm:h-10p sm:flex">
                            <div className="sm:w-50p w-full flex justify-center items-center text-2xl letrahoney tracking-widest">
                                PIDELO POR
                            </div>
                            <div className="h-full sm:w-50p w-full flex">
                                <button onClick={()=>CONFIRMAR({precio:product.precio,opciones:product.opcion2,nombre:product.nombre,imagen:product.imagen2})} className="w-full h-full text-center letrahoney tracking-widest rounded-bl-full bx-shadown-black bg-orange-600 text-white">AÑADIR CARRITO</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                :null}
            </Element>}
            <ProductosL id={true} changeId={ChangeId}/>
            <Footer/>
        </div>
        </DocumentTitle>
    )
}
export default Producto