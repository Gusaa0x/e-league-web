import React from 'react'
import {Link} from 'react-scroll'
const Footer = () => {
  return (
    <div className='bg-PaletaNegro h-56 flex text-PaletaBlanco'>

        <div className='w-[50%] border-r-2 text-sm text-center flex justify-center items-center'>diseñado por Topla
desarrollado por Gusa y Drio</div>

        <div className='w-[50%] flex flex-col justify-between my-7 text-sm'>
          <ul className='underline text-center'>
            <li><Link href='/'>INICIO</Link></li>
            <li><Link href='/'>TORNEOS</Link></li>
            <li><Link href='/'>RESULTADOS</Link></li>
          </ul>
          <div className='text-center'>© Todos los derechos reservados.</div>
          </div>
    </div>
  )
}

export default Footer