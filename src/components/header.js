import React, { useEffect } from 'react';
import {useWindowScroll} from 'react-use'
import {motion,AnimatePresence} from 'framer-motion'
import inicio from '../img/casa.png'
import productos from '../img/rebaja.png'
import contactanos from '../img/contacto.png'
import {Link} from 'react-scroll';
import {Link as Links} from 'react-router-dom'
const variantsContainer = {
    hover : {
        width:'100%',
        transition:{
            duration:0.3,
            when: "beforeChildren",
            delayChildren : 0
        }
    },
    inital : {
        width:'50%'
    }
}
const variantsChildren = {
    hover : {
        display:'flex',
        width:'100%',
        transition:{
            duration:0.3
        }
    },
    initialIcon : {
        width:'100%'
    },
    hoverIcon : {
        width:'10%',
        transition:{
            duraton:0.1
        }
    },
    initial :{
        width:'0%',
        display :'none'
    }
}
const Header = (props)=>{
    const {y:pageYOffset} = useWindowScroll();
    useEffect(()=>{
        window.scrollTo( 0, 0 );
    },[])
    if(props.inicio){
        return(
            <>
            <AnimatePresence>
            {pageYOffset!==0?
            <motion.div initial={{height:'20%'}} animate={{height:'15%',transition:{duration:0.5}}} className="z-40 bx-shadown-black bg-gray-700 w-full fixed ">
                <div className="container-p h-full block m-auto border-black">
                    <div className="lg:w-20p letrahoney text-2xl text-white sm:flex justify-center items-center float-left hidden h-full">
                        ROJAS SORPRESAS
                    </div>
                    <div className="container-p lg:w-80p float-left h-full block flex m-auto border-black">
                    <Link to="inicio" smooth={true} className="justify-center items-center lg:w-33p flex">
                        <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex p-1 rounded">
                            <motion.div initial='initialIcon' show='hoverIcon' className="justify-center h-full items-center flex" variants={variantsChildren}><img alt='inicio' src={inicio} className="lg:h-80p h-full"/></motion.div>
                            <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">INCIO</motion.div>
                        </motion.div>
                    </Link>
                    <Link to="products" smooth={true} className="justify-center items-center lg:w-33p flex">
                        <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex rounded">
                            <motion.div initial='initialIcon' show='hoverIcon' variants={variantsChildren} className="justify-center items-center h-full flex"><img alt='productos' src={productos} className="lg:h-80p h-full"/></motion.div>
                            <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">PRODUCTOS</motion.div>
                        </motion.div>
                    </Link>
                    <Link to="contact" smooth={true} className="justify-center items-center lg:w-33p flex">
                        <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex  rounded">
                            <motion.div initial='initialIcon' show='hoverIcon' variants={variantsChildren} className="justify-center items-center h-full flex"><img alt='contacto' src={contactanos} className="lg:h-80p h-full"/></motion.div>
                            <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">CONTACTANOS</motion.div>
                        </motion.div>
                        </Link>
                    </div>
                </div>
            </motion.div>
            :            
            <motion.div initial={{height:'15%'}} animate={{height:'20%',transition:{duration:0.3}}}  className="z-40 bx-shadown-black w-full fixed ">
                <div className="container-p h-full block flex m-auto border-black">
                    <Link to="inicio" smooth={true} className="justify-center items-center lg:w-33p flex">
                        <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex p-1 rounded">
                            <motion.div initial='initialIcon' show='hoverIcon' className="justify-center h-full items-center flex" variants={variantsChildren}><img alt='inicio' src={inicio} className="lg:h-80p h-full"/></motion.div>
                            <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">INCIO</motion.div>
                        </motion.div>
                    </Link>
                    <Link to="products" smooth={true} className="justify-center items-center lg:w-33p flex">
                        <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex p-1 rounded">
                            <motion.div initial='initialIcon' show='hoverIcon' variants={variantsChildren} className="justify-center items-center h-full flex"><img alt='productos' src={productos} className="lg:h-80p h-full"/></motion.div>
                            <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">PRODUCTOS</motion.div>
                        </motion.div>
                    </Link>
                    <Link to="contact" smooth={true} className="justify-center items-center lg:w-33p flex">
                        <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex p-1 rounded">
                            <motion.div initial='initialIcon' show='hoverIcon' variants={variantsChildren} className="justify-center items-center h-full flex"><img alt='contacto' src={contactanos} className="lg:h-80p h-full"/></motion.div>
                            <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">CONTACTANOS</motion.div>
                        </motion.div>
                        </Link>
                </div>
            </motion.div>}
            </AnimatePresence>
            </>
        )
    }else{
        return(
            <>
            <AnimatePresence>
            {pageYOffset!==0?
            <motion.div initial={{height:'20%'}} animate={{height:'15%',transition:{duration:0.5}}} className="z-40 bx-shadown-black bg-gray-700 w-full fixed ">
                <div className="container-p h-full block m-auto border-black">
                    <div className="lg:w-20p letrahoney text-2xl text-white sm:flex justify-center items-center float-left hidden h-full">
                        ROJAS SORPRESAS
                    </div>
                    <div className="container-p lg:w-80p float-left h-full block flex m-auto border-black">
                    <Links to="/" smooth={'true'} className="justify-center items-center lg:w-33p flex">
                        <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex p-1 rounded">
                            <motion.div initial='initialIcon' show='hoverIcon' className="justify-center h-full items-center flex" variants={variantsChildren}><img alt='inicio' src={inicio} className="lg:h-80p h-full"/></motion.div>
                            <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">INCIO</motion.div>
                        </motion.div>
                    </Links>
                    {props.carrito?
                    <Links to="/producto/Desayuno-Mesa-Grande" smooth={'true'} className="justify-center items-center lg:w-33p flex">
                    <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex rounded">
                        <motion.div initial='initialIcon' show='hoverIcon' variants={variantsChildren} className="justify-center items-center h-full flex"><img alt='productos' src={productos} className="lg:h-80p h-full"/></motion.div>
                        <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">PRODUCTOS</motion.div>
                    </motion.div>
                    </Links>
                    :<Link to="products" smooth={'true'} className="justify-center items-center lg:w-33p flex">
                    <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex rounded">
                        <motion.div initial='initialIcon' show='hoverIcon' variants={variantsChildren} className="justify-center items-center h-full flex"><img alt='productos' src={productos} className="lg:h-80p h-full"/></motion.div>
                        <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">PRODUCTOS</motion.div>
                    </motion.div>
                    </Link>}
                    
                    <Link to="contact" smooth={'true'} className="justify-center items-center lg:w-33p flex">
                        <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex  rounded">
                            <motion.div initial='initialIcon' show='hoverIcon' variants={variantsChildren} className="justify-center items-center h-full flex"><img alt='contacto' src={contactanos} className="lg:h-80p h-full"/></motion.div>
                            <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">CONTACTANOS</motion.div>
                        </motion.div>
                        </Link>
                    </div>
                </div>
            </motion.div>
            :            
            <motion.div initial={{height:'15%'}} animate={{height:'20%',transition:{duration:0.3}}}  className="z-40 bx-shadown-black w-full fixed ">
                <div className="container-p h-full block flex m-auto border-black">
                    <Links to="/" smooth={'true'} className="justify-center items-center lg:w-33p flex">
                        <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex p-1 rounded">
                            <motion.div initial='initialIcon' show='hoverIcon' className="justify-center h-full items-center flex" variants={variantsChildren}><img alt='inicio' src={inicio} className="lg:h-80p h-full"/></motion.div>
                            <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">INCIO</motion.div>
                        </motion.div>
                    </Links>
                    {props.carrito?
                    <Links to="/producto/Desayuno-Mesa-Grande" smooth={'true'} className="justify-center items-center lg:w-33p flex">
                    <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex p-1 rounded">
                        <motion.div initial='initialIcon' show='hoverIcon' variants={variantsChildren} className="justify-center items-center h-full flex"><img alt='productos' src={productos} className="lg:h-80p h-full"/></motion.div>
                        <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">PRODUCTOS</motion.div>
                    </motion.div>
                    </Links>
                    :<Link to="products" smooth={'true'} className="justify-center items-center lg:w-33p flex">
                    <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex p-1 rounded">
                        <motion.div initial='initialIcon' show='hoverIcon' variants={variantsChildren} className="justify-center items-center h-full flex"><img alt='productos' src={productos} className="lg:h-80p h-full"/></motion.div>
                        <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">PRODUCTOS</motion.div>
                    </motion.div>
                    </Link>}
                    
                    <Link to="contact" smooth={'true'} className="justify-center items-center lg:w-33p flex">
                        <motion.div initial='inital' whileHover='hover' variants={variantsContainer} className="lg:h-40p w-80p cursor-pointer h-40p bg-white lg:flex p-1 rounded">
                            <motion.div initial='initialIcon' show='hoverIcon' variants={variantsChildren} className="justify-center items-center h-full flex"><img alt='contacto' src={contactanos} className="lg:h-80p h-full"/></motion.div>
                            <motion.div initial='initial'  show='hover' variants={variantsChildren} className="justify-center items-center">CONTACTANOS</motion.div>
                        </motion.div>
                        </Link>
                </div>
            </motion.div>}
            </AnimatePresence>
            </>
        )
    }
    
}
export default Header