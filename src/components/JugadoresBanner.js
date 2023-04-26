import React from 'react'
import LogoSKT from './assets/img/SKT_Logo.png'
import LogoG2 from './assets/img/G2_Esportslogo_square.png'
import rolTOP from './assets/img/iconoTOP.png'
import rolJG from './assets/img/iconoJUNGLA.png'
import rolMID from './assets/img/iconoMID.png'
import rolADC from './assets/img/iconoADC.png'
import rolSUPP from './assets/img/iconoSUPP.png'



const JugadoresBanner = () => {
  return (
    <div className='bg-PaletaAzulVioleta h-[600px]'>
        <div className=''>

                {/* LOGO EQUIPOS */}
                <div className='h-[550px] gap-5 flex flex-col justify-between items-center'>
                  <img src={LogoSKT} height={100} width={100}/>
                  {/* ROLES JUGADORES */}
                  <div className='flex flex-col justify-between items-center h-[300px]'>
                    <div className='flex gap-5'>
                    <span className='text-PaletaBlanco'><img src={rolTOP} height={40} width={40}/>Faker</span>
                    <span className='text-PaletaBlanco'><img src={rolJG} height={36} width={36}/>Faker</span>
                    <span className='text-PaletaBlanco'><img src={rolMID} height={40} width={40}/>Faker</span>
                    <span className='text-PaletaBlanco'><img src={rolADC} height={40} width={40}/>Faker</span>
                    <span className='text-PaletaBlanco'><img src={rolSUPP} height={40} width={40}/>Faker</span>
                    </div>
                    <span className='text-PaletaDorado text-2xl font-semibold'>VS</span>
                    <div className='flex gap-5'>
                    <span className='text-PaletaBlanco'><img src={rolTOP} height={30} width={40}/>Faker</span>
                    <span className='text-PaletaBlanco'><img src={rolJG} height={36} width={36}/>Faker</span>
                    <span className='text-PaletaBlanco'><img src={rolMID} height={40} width={40}/>Faker</span>
                    <span className='text-PaletaBlanco'><img src={rolADC} height={40} width={40}/>Faker</span>
                    <span className='text-PaletaBlanco'><img src={rolSUPP} height={40} width={40}/>Faker</span>
                    </div>
                    </div>
                  
                  <img src={LogoG2} height={100} width={100}/>
                  </div>

                  {/* ROLES JUGADORES */}
                <div></div>
        </div>
    </div>
  )
}

export default JugadoresBanner