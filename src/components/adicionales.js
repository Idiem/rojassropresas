import React,{useState} from 'react'
import cerrar from '../img/cerrar.png'
import {motion} from 'framer-motion'
import AdicionalesP from '../productos/adicionales'
import {ModificarAction} from '../action'
import {useSelector,useDispatch} from 'react-redux'
import mas from '../img/suma.png'
import menos from '../img/menos.png'
import {toast} from 'react-toastify'
import flecha from '../img/izquierda (2).png'
const Adicionales = (props)=>{
    const dispactch = useDispatch();
    const productos = useSelector((store)=>store.productos);
    const [verConfimar,setVerConfimar]= useState(false);
    const [confimar,setConfirmar] = useState({})
    const [cantidadA,setCantidad] = useState(1);
    const [mostrarOpciones,sertMostraropciones] = useState({
        pagina:1,
        opciones:[AdicionalesP[0],AdicionalesP[1]]
    })
    const [mostrar,setMostrar] = useState({adicionales:AdicionalesP[0].adicionales});
    const CambiarAdicionales = (a)=>{
        setCantidad(1)
        const mostrar = AdicionalesP.find(AdicionalesP=>AdicionalesP.nombre===a)
        setVerConfimar(false)
        setMostrar(mostrar);
    }
    const PaginaSiguiente = ()=>{
        if(mostrarOpciones.pagina*2>AdicionalesP.length){

        }else{
            const Nuevas = AdicionalesP.slice(mostrarOpciones.pagina*2,mostrarOpciones.pagina*2+2);
            sertMostraropciones({pagina:mostrarOpciones.pagina+1,opciones:Nuevas})
        }
    }
    const PaginaAnterior = ()=>{
        if(mostrarOpciones.pagina*2-4<0){
            
        }else{
            const Nuevas = AdicionalesP.slice(mostrarOpciones.pagina*2-4,mostrarOpciones.pagina*2-2);
            sertMostraropciones({pagina:mostrarOpciones.pagina-1,opciones:Nuevas})
        }
    }
    const mas1 = ()=>{
        setCantidad(cantidadA+1)
    }
    const menos1 = ()=>{
        if(cantidadA===1){

        }else{
            setCantidad(cantidadA-1)
        }
    }
    const PreConfirmar = (id)=>{
        const validar = mostrar.adicionales.find(mostrar=>mostrar.id===id);
        setVerConfimar(true)
        setConfirmar(validar);
    }
    const Confir = ({precio,nombre,imagen})=>{
        let precioN = props.canasta.precio+(precio*cantidadA);
        let pos = productos.indexOf(productos.find(productos=> productos.id === props.canasta.id));
        productos[pos].precio = precioN;
        let otroP = productos[pos].productos.indexOf(productos[pos].productos.find(productos=>productos.nombre===nombre));
        if(otroP!==-1){
            let cantidad = productos[pos].productos[otroP].cantidad;
            productos[pos].productos[otroP] = {...productos[pos].productos[otroP],cantidad:cantidad+cantidadA}
        }else{
            productos[pos].productos.push({nombre,cantidad:cantidadA,adicional:true,precio,imagen})
        }
        dispactch(ModificarAction(productos));
        setVerConfimar(false);
        toast.success(' ✔️ Adicion agregado con exito', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
        <motion.div cli initial={{scale:0}} animate={{scale:1,transition:{duration:0.3}}} className="z-50 sm:p-10 p-3 fixed h-screen w-screen">
            <div className="bg-white h-full rounded relative bx-shadown-black">
                <motion.div onClick={props.cerrar} initial={{backgroundColor:'#FF9393'}} whileHover={{backgroundColor:'#FF0000',scale:1.1,transition:{duration:0.2}}} className=" bx-shadown-black cursor-pointer rounded-full topCerrar absolute bg-red-300 w-12 h-12 rigthCerrar p-3"><img className="h-full" alt='cerrar' src={cerrar} /></motion.div>
                <div className="h-full">
                    <div className="bg-yellow-400 h-10p letrahoney rounded tracking-widest sm:text-5xl text-4xl text-center">ADICIONALES</div>
                    <div className="h-90p overflow-hidden">
                        <div className="sm:float-left sm:block overflow-y-scroll hidden sm:w-30p sm:h-full h-20p p-2">
                            {AdicionalesP.map(u=>
                                <div key={u.nombre} className=" bx-shadown-black mb-2 rounded cursor-pointer sm:p-3 p-1 text-center letrahoney tracking-widest text-2xl" onClick={()=>CambiarAdicionales(u.nombre)}>{u.nombre}</div>
                            )}
                        </div>
                        <div className="sm:float-left sm:hidden block overflow-hidden sm:w-30p sm:h-auto h-20p p-2">
                            <div onClick={PaginaAnterior} className="w-10p cursor-pointer float-left h-full flex items-center justify-center"><img src={flecha} alt='atras' className=" p-1 w-full" /></div>
                            <div className="w-70p float-left">
                                {mostrarOpciones.opciones.map(u=>
                                    <div key={u.nombre} className=" bx-shadown-black mb-2 rounded cursor-pointer sm:p-3 p-1 text-center letrahoney tracking-widest text-2xl" onClick={()=>CambiarAdicionales(u.nombre)}>{u.nombre}</div>
                                )}
                            </div>
                            <div onClick={PaginaSiguiente} className="w-10p cursor-pointer float-left h-full flex items-center justify-center"><img src={flecha} alt='siguiente' className=" p-1 w-full rotate-90" /></div>
                        </div>
                        <div className="sm:float-left sm:w-70p p-1 sm:h-full h-80p">
                            {verConfimar?
                                <div className="h-full p-1">
                                    <div className="h-full bx-shadown-black rounded">
                                        <div className='h-full overflow-hidden p-4'>
                                            <div className="sm:h-10p sm:hidden rounded bg-orange-600 text-white tracking-widest text-size-20 letrahoney flex items-center justify-center">{confimar.nombre} - ${confimar.precio}</div>
                                            <div className="sm:float-left h-60p sm:h-full sm:w-50p">
                                                <img src={confimar.imagen} alt='imganen-producto' className="h-full block m-auto" />
                                            </div>
                                            <div className="sm:float-left tracking-widest flex justify-center items-center letrahoney h-30p sm:h-full p-1 sm:w-50p">
                                                <div className="text-center h-full w-full">
                                                    <div className="sm:h-20p sm:flex hidden rounded bg-orange-600 text-white tracking-widest text-size-20 letrahoney items-center justify-center">{confimar.nombre}</div>
                                                    <div className='sm:h-70p'>
                                                        <div className="h-50p w-50p m-auto sm:flex hidden items-center justify-center">
                                                            <div className="text-center text-size-20">
                                                                CON ESTE ADICIONAL TU CANASTA QUEDARIA EN 
                                                                <div>{formatCurrency("es-CO", "COP", 0,parseInt(props.canasta.precio) + (confimar.precio*cantidadA))}</div>
                                                            </div>
                                                        </div>  
                                                        <div className="h-full sm:h-50p">
                                                            <div className="tracking-widest p-2 overflow-hidden w-full block m-auto">
                                                                <div onClick={menos1} className="float-left w-10p sm:p-2 "><img alt='menos' src={menos} className="w-full rounded colormas-menos p-3 block m-auto"/></div>
                                                                <div onClick={()=>Confir({precio:confimar.precio,nombre:confimar.nombre,imagen:confimar.imagen})} className="float-left w-70p cursor-pointer bx-shadown-black coloragregar text-white rounded p-2 text-2xl text-center">AGREGAR {cantidadA}</div>
                                                                <div onClick={mas1} className="float-left w-10p sm:p-2 "><img alt='mas' src={mas} className="w-full rounded colormas-menos p-3 block m-auto"/></div>
                                                            </div>
                                                            <div onClick={()=>setVerConfimar(false)} className="tracking-widest p-2 cursor-pointer w-full">
                                                                <div className="w-90p block m-auto bx-shadown-black coloreliminar text-2xl text-white rounded p-2 text-center">CANCELAR</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sm:h-10p sm:flex hidden rounded text-2xl bg-orange-200 letrahoney items-center justify-center">${confimar.precio}</div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            :<>
                            {mostrar.adicionales?
                                <div className="overflow-scroll p-2 h-full">
                                    {mostrar.adicionales.map(u=>
                                        <div key={u.id} className="p-1 sm:float-left sm:w-25p sm:h-48p h-64">
                                            <div onClick={()=>PreConfirmar(u.id)} className="bx-shadown-black rounded  cursor-pointer h-full">
                                                <div className="h-20p rounded bg-orange-600 text-white tracking-widest text-size-20 letrahoney flex items-center justify-center">{u.nombre}</div>
                                                <div className='h-70p'><img src={u.imagen} alt='imganen-producto' className="h-full block m-auto" /></div>
                                                <div className="h-10p rounded bg-orange-200 letrahoney text-center">{formatCurrency("es-CO", "COP", 0,u.precio)}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            :null}
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Adicionales;