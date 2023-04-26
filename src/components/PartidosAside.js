import React from 'react'
import LogoSKT from './assets/img/SKT_Logo.png'
import LogoG2 from './assets/img/G2_Esportslogo_square.png'
import Carousel from './Carousel'


const PartidosAside = () => {
  return (
    <div className='bg-PaletaAzulVioleta flex flex-col sm:flex-row h-[950px] sm:h-[450px] shadow-xl shadow-black border-t-[1px] border-PaletaBlancoTransparente'>

{/* SCROLL CONTAINER */}
<div className='absolute left-[35%] py-2 sm:left-[7%] lg:left-[12%] underline text-xl font-bold text-PaletaDorado'>
  TORNEOS
  </div>
      <div className='bg-PaletaBlancoTransparente w-[100%] h-[40%] sm:h-[100%] sm:w-[30%] flex justify-center items-center gap-5 overflow-x-scroll'>
      <Carousel/>
      </div>

      {/* PARTIDOS CONTAINER */}
      <div className='bg-PaletaAzulVioleta w-[100%] h-[950px] gap-10 sm:h-[100%] sm:w-[70%] flex justify-center items-center flex-col '>
        {/* TARJETA 1 */}
        <div className='bg-PaletaAzulVioleta shadow-2xl shadow-black flex justify-between w-[85%] h-[22%] border border-PaletaBlanco'>
          <div className='flex flex-col justify-center items-center'>
            <img src={LogoSKT} height={65} width={65}/><span className='text-PaletaBlanco'>SKT</span>
            </div>
            <div className='flex justify-center items-center flex-col'>
            <span className='text-PaletaDorado font-semibold'>VS</span>
            <span className='text-PaletaDorado font-semibold'>BO5</span>
            </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={LogoG2} height={65} width={65}/><span className='text-PaletaBlanco'>G2</span>
            </div>
        </div>

 {/* TARJETA 1 */}
 <div className='bg-PaletaAzulVioleta shadow-2xl shadow-black flex justify-between w-[85%] h-[22%] border border-PaletaBlanco'>
          <div className='flex flex-col justify-center items-center'>
            <img src={LogoSKT} height={65} width={65}/><span className='text-PaletaBlanco'>SKT</span>
            </div>
            <div className='flex justify-center items-center flex-col'>
            <span className='text-PaletaDorado font-semibold'>VS</span>
            <span className='text-PaletaDorado font-semibold'>BO5</span>
            </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={LogoG2} height={65} width={65}/><span className='text-PaletaBlanco'>G2</span>
            </div>
        </div>

 {/* TARJETA 1 */}
 <div className='bg-PaletaAzulVioleta shadow-2xl shadow-black flex justify-between w-[85%] h-[22%] border border-PaletaBlanco'>
          <div className='flex flex-col justify-center items-center'>
            <img src={LogoSKT} height={65} width={65}/><span className='text-PaletaBlanco'>SKT</span>
            </div>
            <div className='flex justify-center items-center flex-col'>
            <span className='text-PaletaDorado font-semibold'>VS</span>
            <span className='text-PaletaDorado font-semibold'>BO5</span>
            </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={LogoG2} height={65} width={65}/><span className='text-PaletaBlanco'>G2</span>
            </div>
        </div>



      </div>
    </div>
  )
}

export default PartidosAside