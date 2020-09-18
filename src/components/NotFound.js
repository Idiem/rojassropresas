import React from 'react'
import Error from '../img/404.png'
import {Link} from 'react-router-dom'
const NotFound = ()=>{
    return(
        <div className="h-screen bg-gray-900 p-10 letrahoney text-white text-3xl">
            <div className="sm:h-20p h-40p text-center">
                LO SIENTO NO SE ENCONTRO LA PAGINA QUE BUSCABAS!<br/>PERO PUEDES IR AL INICIO
            </div>
            <div className="sm:h-60p h-40p">
                <img className="h-full block m-auto" alt='not found img' src={Error} />
            </div>
            <div className="h-20p flex justify-center items-center p-5">
                <Link to='/' className="bx-shadown-white text-center bg-orange-800 w-50p rounded">INICIO</Link>
            </div>
        </div>
    )
}

export default NotFound;