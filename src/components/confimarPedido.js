import React,{useState} from 'react'
import {motion} from 'framer-motion'
import cerrar from '../img/cerrar.png'

const ConfimarPedido = (props)=>{
    const [state,setState] = useState({
        nombre:'',
        nombreD:'',
        telefono:'',
        direccion:'',
        fecha:``
    })
    const Onchange = (e)=>{
        setState({...state,[e.target.name]:e.target.value});
    }
    const Confimar = (e)=>{
        e.preventDefault()
    }
    return(
        <motion.div cli initial={{scale:0}} animate={{scale:1,transition:{duration:0.3}}} className="z-50 sm:p-10 p-3 fixed h-screen w-screen">
            <div className="bg-white h-full rounded relative bx-shadown-black">
                <motion.div onClick={props.cerrar} initial={{backgroundColor:'#FF9393'}} whileHover={{backgroundColor:'#FF0000',scale:1.1,transition:{duration:0.2}}} className=" bx-shadown-black cursor-pointer rounded-full topCerrar absolute bg-red-300 w-12 h-12 rigthCerrar p-3"><img className="h-full" alt='cerrar' src={cerrar} /></motion.div>
                <div className="h-full">
                    <div className="bg-yellow-400 h-10p letrahoney rounded tracking-widest sm:text-5xl sm:text-4xl text-3xl flex items-center justify-center">CONFIRMAR PEDIDO</div>
                    <div className="h-90p overflow-y-scroll p-2">
                       <div className="sm:h-10p pb-2 h-20p">
                           <div className="bx-shadown-black flex items-center justify-center text-center rounded h-full w-full">NECESITAMOS UNOS DATOS PARA COMPLETAR EL PEDIDO</div>
                        </div>
                        <div className="sm:h-90p sm:hidden block overflow-y-scroll rounded bx-shadown-black h-80p p-2">
                            <div className="text-center w-full p-2">
                                <form onSubmit={Confimar}>
                                <div className="h-20p">
                                    <div className="letrahoney tracking-widest sm:text-2xl">TU NOMBRE</div>
                                    <div><input name='nombre' value={state.nombre} onChange={Onchange} className="p-2 rounded border-b-4 border-black sm:w-20p w-80p" type='text'/></div>
                                </div>
                                <div className="h-20p">
                                    <div className="letrahoney tracking-widest sm:text-2xl">NOMBRE A QUIEN VA DIRIJIDO</div>
                                    <div><input name='nombreD' value={state.nombreD} onChange={Onchange} className="p-2 rounded border-b-4 border-black sm:w-20p w-80p" type='text'/></div>
                                </div>
                                <div className="h-20p">
                                    <div className="letrahoney tracking-widest sm:text-2xl">TU NUMERO DE WHATSAPP</div>
                                    <div><input name='telefono' value={state.telefono} onChange={Onchange} className="p-2 rounded border-b-4 border-black sm:w-20p w-80p" type='number'/></div>
                                </div>
                                <div className="h-20p">
                                    <div className="letrahoney tracking-widest sm:text-2xl">DIRECCION DE ENVIO</div>
                                    <div><input name='direccion' value={state.direccion} onChange={Onchange} className="p-2 rounded border-b-4 border-black sm:w-20p w-80p" type='text'/></div>
                                </div>
                                <div className="h-20p">
                                    <div className="letrahoney tracking-widest sm:text-2xl">FECHA DE ENVIO</div>
                                    <div><input name='fecha' value={state.fecha} onChange={Onchange} className="p-2 rounded border-b-4 border-black sm:w-20p w-80p" type='date'/></div>
                                </div>
                                <div className="h-20p">
                                    <div><input className="p-2 rounded bx-shadown-black bg-orange-600 text-white sm:w-20p w-80p" type='submit'/></div>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div className="sm:h-90p sm:block hidden overflow-y-scroll rounded bx-shadown-black h-80p p-2">
                            <form className="h-full">
                            <div className="text-center h-full w-full grid grid-cols-2 grid-rows-3 p-2">
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="letrahoney tracking-widest sm:text-2xl">TU NOMBRE</div>
                                        <div><input className="p-2 rounded border-b-4 border-black w-50p" type='text'/></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="letrahoney tracking-widest sm:text-2xl">NOMBRE A QUIEN VA DIRIJIDO</div>
                                        <div><input className="p-2 rounded border-b-4 border-black w-50p" type='text'/></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="letrahoney tracking-widest sm:text-2xl">TU NUMERO DE WHATSAPP</div>
                                        <div><input className="p-2 rounded border-b-4 border-black w-50p" type='text'/></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="letrahoney tracking-widest sm:text-2xl">DIRRECION DE ENVIO</div>
                                        <div><input className="p-2 rounded border-b-4 border-black w-50p" type='text'/></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="letrahoney tracking-widest sm:text-2xl">FECHA DE ENVIO</div>
                                        <div><input className="p-2 rounded border-b-4 border-black w-50p" type='text'/></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full"><input className="p-3 rounded bx-shadown-black bg-orange-600 text-white w-50p" type='submit'/></div>
                                </div>
                                
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ConfimarPedido