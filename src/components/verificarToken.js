import React from 'react'
import {useDispatch} from 'react-redux'
import {CargarInfoAction} from '../action'

const VerificarToken = (props)=>{
    const dispactch = useDispatch();
    const token = localStorage.getItem('token');
    if(token===''||token===null||token === undefined){
        
    }else{
        dispactch(CargarInfoAction(localStorage.getItem('token')));
    }
    return(
        <>
            {props.children}
        </>
    )
}

export default VerificarToken