import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import productos from '../productos/index'
import {Element,scroller} from 'react-scroll'
import Header from './header'
import whatsapp from '../img/whatsapp.png'
import instragram from '../img/instagram.png'
import Footer from './footer'
import ProductosL from './productos'
const Producto = ()=>{
    const {id} = useParams()
    const [Idp,setIdp] = useState(id);
    const [product,setProduct] = useState({})
    useEffect(()=>{
        for(let i=0;i<productos.length;i++){
            if(productos[i].id===Idp){
                setProduct(productos[i]);
            }
        }
    },[Idp]);
    const ChangeId = (id)=>{
        setIdp(id);
        scroller.scrollTo('inicio', {
            smooth: true,
        })
    }
    return(
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
                                <div key={u} className="h-10p sm:text-left text-center">
                                    - {u}
                                </div>
                            )}
                        </div>
                        <div className="sm:h-10p sm:flex">
                            <div className="sm:w-50p w-full flex justify-center items-center text-2xl letrahoney tracking-widest">
                                PIDELO POR
                            </div>
                            <div className="h-full sm:w-50p w-full flex">
                                <a href="http://api.whatsapp.com/send?phone=573232121578" target="_blank" rel="noopener noreferrer" className="w-50p h-full"><img alt='img whatsapp' className="sm:h-full block m-auto w-50p sm:w-auto" src={whatsapp} /></a>
                                <a href='https://www.instagram.com/rojas_sorpresas/' target='_blank' rel="noopener noreferrer" className="w-50p h-full"><img alt='img instagram' className="sm:h-full block m-auto w-50p sm:w-auto" src={instragram} /></a>
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
                                <div key={u} className="h-10p sm:text-left text-center">
                                    - {u}
                                </div>
                            )}
                        </div>
                        <div className="sm:h-10p sm:flex">
                            <div className="sm:w-50p w-full flex justify-center items-center text-2xl letrahoney tracking-widest">
                                PIDELO POR
                            </div>
                            <div className="h-full sm:w-50p w-full flex">
                                <a href="http://api.whatsapp.com/send?phone=573232121578" target="_blank" rel="noopener noreferrer" className="w-50p h-full"><img alt='img whatsapp' className="sm:h-full block m-auto w-50p sm:w-auto" src={whatsapp} /></a>
                                <a href='https://www.instagram.com/rojas_sorpresas/' target='_blank' rel="noopener noreferrer" className="w-50p h-full"><img alt='img instagram' className="sm:h-full block m-auto w-50p sm:w-auto" src={instragram} /></a>
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
    )
}
export default Producto