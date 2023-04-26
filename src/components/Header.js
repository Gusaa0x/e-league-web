import React, {useState} from 'react'
import logo from './assets/img/Logo.png';
import {Link} from 'react-scroll'
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className='bg-PaletaAzulVioleta w-full h-[130px] flex flex-col justify-between'>

{/* SOMBRA HEADER */}
        <div className='lg:flex lg:justify-between lg:items-center py-1 pl-1 shadow-xl shadow-black border-b-[1px] border-PaletaBlancoTransparente'>
          <div className='lg:m-2 lg:ml-10 m-2'>
          <img src={logo} height={90} width={95} className='lg:h-[110px] lg:w-[100px]'/>
          </div>
        <ul className="DESKTOP-MENU lg:text-lg lg:pr-[120px] font-semibold hidden space-x-8 text-PaletaBlanco lg:flex z-50">
          <li>
            <Link href="/">INICIO</Link>
          </li>
          <li>
            <Link href="/">TORNEOS</Link>
          </li>
          <li>
            <Link href="/">RESULTADOS</Link>
          </li>
        </ul>
        </div>
      
      <nav className='flex justify-center items-center'>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 absolute top-0 right-0 m-5"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-[2px] w-8 bg-PaletaDorado"></span>
            <span className="block h-[2px] w-8  bg-PaletaDorado"></span>
            <span className="block h-[2px] w-8 bg-PaletaDorado"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] font-bold gap-5">
              <li className="m-10 text-xl uppercase text-PaletaBlanco">
                <a href="/about" className=''>INICIO</a>
              </li>
              <li className="m-10 text-xl uppercase text-PaletaBlanco">
                <a href="/portfolio" className=''>TORNEOS</a>
              </li>
              <li className="m-10 text-xl uppercase text-PaletaBlanco">
                <a href="/contact" className=''>RESULTADOS</a>
              </li>
            </ul>
            <AiOutlineClose className="absolute top-0 right-0 m-10 text-3xl text-PaletaDorado"
              onClick={() => setIsNavOpen(false)} />
          </div>
        </section>

      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(59, 52, 94, 1);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>



    </div>
  )
}

export default Header