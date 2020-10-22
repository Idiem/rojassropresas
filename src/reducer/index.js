import {
    ACTUALIZAR_PRODUCTO,
    AGREGAR_PRODUCTO,
    ELIMAR_PRODUCTO,
    CARGAR_INFO
}from '../types/index'

const initialState = {
    productos : [],
    cantidad : 0,
    total:0,
    err : null
}

export default function(state = initialState,action){
    switch(action.type){
        case ACTUALIZAR_PRODUCTO : return {...state,productos:action.payload.productos,cantidad:action.payload.cantidad,total:action.payload.total}
        case AGREGAR_PRODUCTO : return {...state,productos:action.payload.productos,cantidad:action.payload.cantidad,total:action.payload.total,err:false}
        case ELIMAR_PRODUCTO : return {...state,productos:action.payload.productos,cantidad:action.payload.cantidad,total:action.payload.total}
        case CARGAR_INFO : return {...state,productos:action.payload.productos,cantidad:action.payload.cantidad,total:action.payload.total}
        default:
            return state
    }
}