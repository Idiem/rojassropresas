import React from 'react'
import {Element} from 'react-scroll'
import instragram from '../img/instagram.png'
import whatsapp from '../img/whatsapp.png'
import gmail from '../img/gmail.png'
import logo from '../img/logo.png'

const Footer = ()=>{
    return(
        <Element name="contact">
      <div className="bg-gray-900 tracking-widest text-white letrahoney p-16 sm:flex sm:h-82 h-auto" >
          <div className="sm:text-3xl h-full lg:w-25p">
              <div className="h-30p text-center">SIGUENOS EN</div> 
              <a href='https://www.instagram.com/rojas_sorpresas/' rel="noopener noreferrer" className="h-70p w-full flex cursor-pointer">
                <div className="sm:w-full h-full sm:p-6 p-12"><img alt='instagram' className="sm:h-full sm:w-auto w-50p block m-auto 
                  " src={instragram} /></div>
              </a>
          </div>
          <div className="lg:w-50p text-center sm:text-4xl h-full ">
                <div className="">ROJAS SORPRESAS</div> 
                <div className="h-70p w-full">
                  <div className="sm:w-full p-4 sm:p-0 h-full"><img className="sm:h-full sm:w-auto w-50p block m-auto rounded-full
                  " alt='logo rojas sorpresas' src={logo} /></div>
                </div>
          </div>
          <div className="lg:w-25p pt-12 sm:pt-0 h-full">
                <div className="h-30p text-center sm:text-3xl">HAS TU PEDIDO</div> 
                <div className="h-70p w-full flex">
                  <div className="w-50p p-8"><a href="http://api.whatsapp.com/send?phone=573232121578" target='_blank' rel="noopener noreferrer"><img className="w-full cursor-pointer" alt='img whatsapp' src={whatsapp} /></a></div>
                  <div className="w-50p p-8"><a href="https://forms.gle/XzDEFmHGtUCg4TiW7" target='_blank' rel="noopener noreferrer"><img className="w-full cursor-pointer" alt='img gmail' src={gmail} /></a></div>
                </div>
          </div>
      </div>
      </Element>
    )
}
export default Footer