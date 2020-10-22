import {
    AGREGAR_PRODUCTO,
    CARGAR_INFO,
    ELIMAR_PRODUCTO,
    ACTUALIZAR_PRODUCTO
}from '../types'
import jwt from 'jsonwebtoken'
import {toast} from 'react-toastify'
export function AgregarProductoAction(productos){
    return async distpach =>{
        const token = jwt.sign({
            data: productos
        }, 'rojassorpresas', { expiresIn: 60 * 60 * 24 * 30});
        var total = 0;
        for(let i in productos){
            total = total + parseInt(productos[i].precio)
        }
        distpach(AgregarProducto({productos,cantidad:productos.length,total}));
        localStorage.setItem('token',token);
        toast.success(' ✔️ Canasta agregada con exito', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}
export function ModificarAction(productos){
    return async distpach =>{
        const token = jwt.sign({
            data: productos
        }, 'rojassorpresas', { expiresIn: 60 * 60 * 24 * 30});
        var total = 0;
        for(let i in productos){
            total = total + parseInt(productos[i].precio)
        }
        distpach(Actualizar({productos,cantidad:productos.length,total}));
        localStorage.setItem('token',token);
    }
}
export function CargarInfoAction(token){
    return async distpach =>{
        var productos = jwt.verify(token, 'rojassorpresas');
        var total = 0;
        for(let i in productos.data){
            total = total + parseInt(productos.data[i].precio);
        }
        distpach(CargarInfo({productos:productos.data,cantidad:productos.data.length,total}));
    }
}
export function EliminarAction(productos){
    return async distpach =>{
        const token = jwt.sign({
            data: productos
        }, 'rojassorpresas', { expiresIn: 60 * 60 * 24 * 30});
        var total = 0;
        for(let i in productos){
            total = total + parseInt(productos[i].precio)
        }
        distpach(Eliminar({productos,cantidad:productos.length,total}));
        localStorage.setItem('token',token);
        toast.error(' ❌ Canasta eliminada con exito  ', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
}
const Actualizar = (productos)=>({
    type: ACTUALIZAR_PRODUCTO,
    payload : productos
})
const Eliminar = (productos)=>({
    type: ELIMAR_PRODUCTO,
    payload : productos
})
const CargarInfo = (productos)=>({
    type: CARGAR_INFO,
    payload : productos
})
const AgregarProducto =(productos)=>({
    type: AGREGAR_PRODUCTO,
    payload : productos
})
