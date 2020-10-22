import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import DocumentTitle from 'react-document-title'
import Header from './header';
import Footer from './footer'
import {EliminarAction} from '../action'
import AdicionalesV from './adicionales'
import AdicionalesC from './adicionesCanasta'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ConfimarPedido from './confimarPedido';
const Canasta = ()=>{
    const dispactch = useDispatch();
    const productos = useSelector((store)=>store.productos);
    const total = useSelector((store)=>store.total);
    const canastas = useSelector((store)=>store.cantidad);
    const [ModificarCanastaDatos,setModificarCanastaDatos] = useState({});
    const [adiciones,setadiciones] = useState({
        agregar:false,
        eliminar:false,
        confimar:false
    });
    const AdicionalesCambiar=(id)=>{
        setModificarCanastaDatos(id)
        if(adiciones.agregar){
            setadiciones({...adiciones,agregar:false})
        }else{
            setadiciones({...adiciones,agregar:true,eliminar:false})
        }
    }
    const eliminarCanasta = (id)=>{
        let pos = productos.indexOf(productos.find(productos=> productos.id === id));
        productos.splice(pos,1);
        dispactch(EliminarAction(productos))
    }
    const EliminarAdicionales = (id)=>{
        setModificarCanastaDatos(id)
        if(adiciones.eliminar){
            setadiciones({...adiciones,eliminar:false})
        }else{
            setadiciones({...adiciones,eliminar:true,agregar:false})
        }
    }
    const PreConfimar = ()=>{
        if(adiciones.confimar){
            setadiciones({...adiciones,confimar:false})
        }else{
            setadiciones({...adiciones,eliminar:false,agregar:false,confimar:true})
        }
    }
    function formatCurrency (locales, currency, fractionDigits, number) {
        var formatted = new Intl.NumberFormat(locales, {
          style: 'currency',
          currency: currency,
          minimumFractionDigits: fractionDigits
        }).format(number);
        return formatted;
      }
    return(
        <DocumentTitle title='Carrito | 🌹 RS'>
        <div className="fondogra">
            <ToastContainer></ToastContainer>
            {adiciones.agregar?
                <AdicionalesV canasta={ModificarCanastaDatos} cerrar={AdicionalesCambiar}/>
            :null}
            {adiciones.eliminar?
                <AdicionalesC agregar={AdicionalesCambiar} canasta={ModificarCanastaDatos} cerrar={EliminarAdicionales}/>
            :null}
            {adiciones.confimar?
            <ConfimarPedido cerrar={PreConfimar}/>
            :null}
            <Header carrito={true} inicio={false}/>
            <div className="sm:pt-32 mb-10 pt-32 min-h-screen container-p block m-auto">
                <div className="sm:p-24 sm:pt-10 sm:pb-0 sm:pl-0 sm:pr-0 p-5">
                <div className="bx-shadown-black mb-4 letrahoney tracking-widest sm:text-2xl text-white bg-orange-600 rounded bg-white p-4 sm:flex sm:items-center sm:justify-center"><div className="sm:w-50p text-center">TOTAL CANASTAS : {canastas}</div><div className="sm:w-50p text-center">TOTAL A PAGAR : {formatCurrency("es-CO", "COP", 0,total)}</div></div>
                    {productos.map(u=>
                        <div className="bx-shadown-black text-center rounded bg-white p-8 mb-4 tracking-widest letrahoney" key={u.id}>
                            <div className="mb-2 letrahoney tracking-widest text-center text-3xl">{u.nombre}</div>
                            <div className="grid sm:grid-cols-3 grid-cols-1">
                                <div className="flex items-center justify-center">
                                    <div className="text-size-20">
                                        {u.productos.map(l=>
                                            <div key={l.nombre}>{l.cantidad>1?l.cantidad:null} {l.nombre}</div>
                                        )}
                                    </div>
                                </div>    
                                <div>
                                    <img className="h-foto-min block m-auto h-foto-max" alt='IMAGEN CANASTA' src={u.imagen}/> 
                                </div> 
                                <div className="sm:h-foto-min sm:h-foto-max">
                                    <div className="sm:h-25p mb-1 tracking-widest flex justify-center text-2xl items-center">
                                        {formatCurrency("es-CO", "COP", 0,u.precio)}
                                    </div>
                                    <div className="sm:h-25p sm:mb-0 mb-2 flex justify-center items-center"><button onClick={()=>AdicionalesCambiar(u)} className="tracking-widest w-80p block m-auto bx-shadown-black coloragregar text-white rounded-bl-full p-2">ADICIONES</button></div>
                                    <div className="sm:h-25p sm:mb-0 mb-2 flex justify-center items-center"><button onClick={()=>EliminarAdicionales(u)} className="tracking-widest w-80p block m-auto bx-shadown-black coloraEliminarA text-white rounded-bl-full p-2">TUS ADICIONES</button></div>
                                    <div className="sm:h-25p flex justify-center items-center"><button onClick={()=>eliminarCanasta(u.id)} className="tracking-widest w-80p block m-auto bx-shadown-black coloreliminar text-white rounded-bl-full p-2">QUITAR DEL CARRITO</button></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button onClick={PreConfimar} className="rounded mt-5 p-3 bg-orange-600 text-white border-2 text-2xl border-white letrahoney tracking-widest block m-auto">CONFIMAR PEDIDO!</button>
            </div>
            <Footer/>
        </div>
        </DocumentTitle>
    )
}

export default Canasta