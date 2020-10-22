import React from 'react'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import carritoCompras from '../img/carrito-de-compras.png'
const CarritoView = ()=>{
    const canastas = useSelector((store)=>store.cantidad);
    return(
        <Link to='/carrito' className="abajo-izquierda overflow-hidden p-2">
          <motion.div initial={{clipPath:`circle(14.6% at 100% 100%)`}} animate={{clipPath:`circle(141.4% at 100% 100%)`,transition:{duration:1}}} className="float-left h-12">
            <div className="flex letrahoney tracking-widest items-center justify-center h-full mr-2 bg-white rounded-l-full p-4 border-2 border-black">TU CARRITO</div>
          </motion.div>
          <motion.div animate={{y:[0,-8,0],transition:{repeat:Infinity,duration:1,repeatDelay:1}}} className="float-left flex justify-center text-2xl items-center text-white letrahoney rounded-full border-2 border-white bg-red-700 h-12 w-12">
            {canastas===0?
            <img src={carritoCompras} alt='carrito' className='h-50p' />
            :canastas}
          </motion.div>
        </Link>
    )
}

export default CarritoView