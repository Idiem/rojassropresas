import {Element} from 'react-scroll'
import React,{useState,useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import Titulo from './titulo';
import Header from './header';
import ImgPresentacion from '../img/imagen.jpg'
import ImgPresentacion2 from '../img/imagen2.jpg'
import ImgPresentacion3 from '../img/imagen3.jpg'
import ImgPresentacion4 from '../img/imagen4.png'
import img1 from '../img/corazon.png'
import img2 from '../img/celebracion.png'
import img3 from '../img/nino.png'
import img4 from '../img/libros.png'
import Footer from './footer';
import ProductosL from './productos';
import DocumentTitle from 'react-document-title'
const varImg = {
    initial: {
        opacity:0,
        display:'none'
    },
    animate:{
        display:'block',
        opacity:1,
        transition:{
            delay:0.6,
            duration:1
        }
    },
    exit:{
        opacity:0,
        transition:{
            duration:0.5
        }
    }
}
const varText = {
    initial: {
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.6,
            duration:1
        }
    },
    exit:{
        opacity:0,
        transition:{
            duration:0.5
        }
    }
}
const Inicio = ()=>{
    const [imagen,setImagen] = useState(1);
    useEffect(()=>{
        setTimeout(() => {
           if(imagen===4){
            setImagen(1)
           }else{
            setImagen(imagen+1)
           } 
        },6000);
    },[imagen]);
    return(
        <DocumentTitle title='Inicio | 🌹 RS'>
        <div className="bg-gray-200">
        <Header inicio={true}/>
        <Element name='inicio'>
      <div className="fondo sm:h-screen min-h-screen pt-32">
        <div className="lg:w-90p lg:h-full sm:h-full w-full container-p lg:p-8 sm:p-7 lg:pb-2 pt-5 block m-auto">
            <Titulo/>
            <div className="p-5 lg:h-80p z-10 sm:h-80p w-full">
                <div className="h-full p-5 lg:flex block">
                    <div className="lg:h-full lg:w-40p sm:h-full h-120 sm:w-full w-full">
                        <AnimatePresence>
                        {imagen===1?
                            <motion.img initial='initial' animate='animate' exit='exit' variants={varImg} className="lg:h-full rounded border-8 border-white block m-auto lg:w-auto sm:w-auto sm:h-full w-70p" src={ImgPresentacion}/>
                        :null}
                        </AnimatePresence>
                        <AnimatePresence>
                        {imagen===2?
                            <motion.img initial='initial' animate='animate' exit='exit' variants={varImg}  className="lg:h-full rounded border-8 border-white block m-auto lg:w-auto sm:w-auto sm:h-full w-70p" src={ImgPresentacion2}/>
                        :null}
                        </AnimatePresence>
                        <AnimatePresence>
                        {imagen===3?
                            <motion.img initial='initial' animate='animate' exit='exit' variants={varImg}  className="lg:h-full rounded border-8 border-white block m-auto lg:w-auto sm:w-auto sm:h-full w-70p" src={ImgPresentacion3}/>
                        :null}
                        </AnimatePresence>
                        <AnimatePresence>
                        {imagen===4?
                            <motion.img initial='initial' animate='animate' exit='exit' variants={varImg}  className="lg:h-full rounded border-8 border-white block m-auto lg:w-auto sm:w-auto sm:h-full w-70p" src={ImgPresentacion4}/>
                        :null}
                        </AnimatePresence>
                    </div>
                    <div className="lg:w-60p lg:block w-full rounded bx-shadown-black bg-white lg:h-full h-140 p-5">
                        <h1 className="letrahoney lg:h-30p w-full text-5xl text-center">EL DETALLE IDEAL</h1>
                        <AnimatePresence>
                        {imagen===1?
                            <motion.div initial='initial' exit='exit' animate='animate' variants={varText} className="letrahoney lg:h-70p text-2xl lg:flex block">
                                <div className="lg:w-60p w-full">
                                    <div className="lg:h-full h-auto flex items-center justify-center"><div className="text-center">No guardes nada para una ocasión especial,<br/> vivir es una ocasión especial!</div></div>
                                </div>
                                <div className="lg:w-40p w-full p-3 h-full"><img className="lg:h-full lg:w-auto w-50p block m-auto" alt='img presentacion' src={img1}/></div>
                            </motion.div>
                        :null}
                        </AnimatePresence>
                        <AnimatePresence>
                        {imagen===2?
                            <motion.div initial='initial' exit='exit' animate='animate' variants={varText} className="letrahoney lg:h-70p text-2xl lg:flex block">
                                <div className="lg:w-60p w-full">
                                    <div className="h-full flex justify-center items-center text-center"><div className="text-center">¡Celebra la vida! <br/>
                                    que todo te dá,<br/>
                                    que todo te brinda.</div></div>
                                </div>
                                <div className="lg:w-40p w-full p-3 h-full"><img className="lg:h-full lg:w-auto w-50p block m-auto" alt='img presentacion 2' src={img2}/></div>
                            </motion.div>
                        :null}
                        </AnimatePresence>
                        <AnimatePresence>
                        {imagen===3?
                            <motion.div initial='initial' exit='exit' animate='animate' variants={varText} className="letrahoney lg:h-70p text-2xl lg:flex block">
                                <div className="lg:w-60p">
                                    <div className="h-full flex justify-center items-center text-center"><div className="text-center">LOS NIÑOS SON <br/>EL TESORO <br/>MAS GRANDE DEL MUNDO!</div></div>
                                </div>
                                <div className="lg:w-40p p-6 h-full"><img className="lg:h-full lg:w-auto w-50p block m-auto" alt='img presentacion 3' src={img3}/></div>
                            </motion.div>
                        :null}
                        </AnimatePresence>
                        <AnimatePresence>
                        {imagen===4?
                            <motion.div initial='initial' exit='exit' animate='animate' variants={varText} className="letrahoney lg:h-70p text-2xl lg:flex block">
                                <div className="lg:w-60p">
                                    <div className="h-full flex justify-center items-center text-center"><div className="text-center">El mundo está en manos de aquellos que tienen el coraje de correr el riesgo y vivir sus sueños.</div></div>
                                </div>
                                <div className="lg:w-40p p-3 h-full"><img className="lg:h-full lg:w-auto w-50p block m-auto" alt='img presentacion 4' src={img4}/></div>
                            </motion.div>
                        :null}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </Element>
     <ProductosL/>
      <Footer/>
    </div>
    </DocumentTitle>
    )
}
export default Inicio;