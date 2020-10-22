import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import cerrar from '../img/cerrar.png'
import mas from '../img/suma.png'
import menos from '../img/menos.png'
import borrar from '../img/borrar.png'
import {useSelector,useDispatch} from 'react-redux'
import {ModificarAction} from '../action';
import {toast} from 'react-toastify'

const AdicionesCanasta = (props)=>{
    const dispactch = useDispatch();
    const productos = useSelector((store)=>store.productos);
    const [adiciones,setAdiciones] = useState(false);
    useEffect(()=>{
        setAdiciones(false);
        for(let i in props.canasta.productos){
            if(props.canasta.productos[i].adicional){
                setAdiciones(true)
            }
        }
    },[props.canasta.productos.length,props.canasta.productos])
    function formatCurrency (locales, currency, fractionDigits, number) {
        var formatted = new Intl.NumberFormat(locales, {
          style: 'currency',
          currency: currency,
          minimumFractionDigits: fractionDigits
        }).format(number);
        return formatted;
    }
    const Mas1 = ({nombre,precio})=>{
        let pos = productos.indexOf(productos.find(productos=> productos.id === props.canasta.id));
        let otroP = productos[pos].productos.indexOf(productos[pos].productos.find(productos=>productos.nombre===nombre));
        productos[pos].productos[otroP].cantidad = productos[pos].productos[otroP].cantidad+1;
        productos[pos].precio = productos[pos].precio + precio;
        dispactch(ModificarAction(productos))
        toast.info(`+ 1 UND ${nombre}`, {
            position: "bottom-left",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const Menos1 = ({nombre,precio})=>{
        let pos = productos.indexOf(productos.find(productos=> productos.id === props.canasta.id));
        let otroP = productos[pos].productos.indexOf(productos[pos].productos.find(productos=>productos.nombre===nombre));
        if(productos[pos].productos[otroP].cantidad===1){
            toast.info(`Puedes borrar el adicional - ${nombre}`, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            productos[pos].productos[otroP].cantidad = productos[pos].productos[otroP].cantidad-1;
            productos[pos].precio = productos[pos].precio - precio;
            dispactch(ModificarAction(productos));
            toast.info(`- 1 UND ${nombre}`, {
                position: "bottom-left",
                autoClose: 1700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
    const Eliminar = ({nombre,precio})=>{
        let pos = productos.indexOf(productos.find(productos=> productos.id === props.canasta.id));
        let otroP = productos[pos].productos.indexOf(productos[pos].productos.find(productos=>productos.nombre===nombre));
        productos[pos].precio = productos[pos].precio - (precio * productos[pos].productos[otroP].cantidad);
        productos[pos].productos.splice(otroP,1);
        dispactch(ModificarAction(productos));
        toast.error(' ❌ Adicion eliminado con exito  ', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return(
        <motion.div cli initial={{scale:0}} animate={{scale:1,transition:{duration:0.3}}} className="z-50 sm:p-10 p-3 fixed h-screen w-screen">
            <div className="bg-white h-full rounded relative bx-shadown-black">
                <motion.div onClick={props.cerrar} initial={{backgroundColor:'#FF9393'}} whileHover={{backgroundColor:'#FF0000',scale:1.1,transition:{duration:0.2}}} className=" bx-shadown-black cursor-pointer rounded-full topCerrar absolute bg-red-300 w-12 h-12 rigthCerrar p-3"><img className="h-full" alt='cerrar' src={cerrar} /></motion.div>
                <div className="h-full">
                    <div className="bg-yellow-400 h-10p letrahoney rounded tracking-widest sm:text-5xl sm:text-4xl text-3xl flex items-center justify-center">TUS ADICIONALES</div>
                    <div className="h-90p overflow-y-scroll">
                        {props.canasta.productos.map(u=>u.adicional?
                            <div key={u.nombre} className="sm:float-left sm:w-25p p-2 sm:h-48p h-64">
                                <div className="bx-shadown-black rounded h-full">
                                    <div className="h-20p rounded bg-orange-600 text-white tracking-widest text-size-20 letrahoney flex items-center justify-center"> {u.cantidad} und - {u.nombre}</div>
                                    <div className='h-70p overflow-hidden'>
                                        <div className="h-full float-left w-50p">
                                            <img src={u.imagen} alt='imganen-producto' className="h-full block m-auto" />
                                        </div>
                                        <div className="h-full float-left w-50p rounded p-1">
                                            <div onClick={()=>Menos1({nombre:u.nombre,precio:u.precio})} className="h-30p rounded cursor-pointer coloreliminar mb-1">
                                                <span className="float-left h-full flex justify-center items-center text-white letrahoney w-60p">MENOS</span> <img alt='menos' src={menos} className="h-full  p-2 float-left" />
                                            </div>
                                            <div onClick={()=>Mas1({nombre:u.nombre,precio:u.precio})} className="h-30p rounded cursor-pointer coloragregar mb-1">
                                                <span className="float-left h-full flex justify-center items-center text-white letrahoney w-60p">MAS</span> <img src={mas} alt='mas' className="h-full  p-2 float-left" />
                                            </div>
                                            <div onClick={()=>Eliminar({nombre:u.nombre,precio:u.precio})} className="h-30p rounded cursor-pointer coloraEliminarA mb-1">
                                                <span className="float-left h-full flex justify-center items-center text-white letrahoney w-60p">BORRAR</span> <img src={borrar} alt='borrar' className="h-full  p-2 float-left" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-10p rounded bg-orange-200 letrahoney text-center">{formatCurrency("es-CO", "COP", 0,u.precio)}</div>
                                </div>
                            </div>
                        :null)}
                        {!adiciones?
                        <div className="h-full flex items-center justify-center">
                            <div className="letrahoney tracking-widest text-2xl text-center">
                                <div className="mb-2">NO TIENES ADICIONES AGREGA MAS!</div>
                                <div className="p-3 rounded cursor-pointer bx-shadown-black block m-auto coloragregar letrahoney text-white w-80p" onClick={()=>props.agregar(props.canasta)}>AGREGAR ADICIONALES</div>
                            </div>
                        </div>:null}                    
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default AdicionesCanasta;