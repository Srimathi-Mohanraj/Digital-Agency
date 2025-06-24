import React from 'react'
import logo from "../../assets/logo.jpeg"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';
import ResSideMenu from './ResSideMenu';



export const MenuLinks = [
  {
    id: "1",
    name: "Home",
    link: "/#Home",

  },
  {
    id: "2",
    name: "Services",
    link: "/#Services",
  },
  {
    id: "3",
    name: "Projects",
    link: "/#Projects",
  },
  {
    id: "4",
    name: "Contact",
    link: "/#Contact",
  },
 

]


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)


  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>

      < nav className='bg-blue-500'>

        <div className='container shadow-lg py-4  md:py-4 sticky z-10'>
          <div className='flex justify-between items-center z-50'>
            {/* title */}
            <div>
              <a href="#" className='flex items-center gap-1'>
                <img src={logo} alt="logo" className='w-5 ' />
                <span className='text-2xl font-semibold text-white'>Digital Agency </span></a>
            </div>
            {/* nav options   */}
            <div className='hidden md:block' >
              <ul className='flex items-center gap-5 px-2  text-lg font-semibold'>
                {MenuLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id}>
                      <a href={link} className='
                      cursor-pointer text-white
                  hover:text-orange-400
                  hover:border-orange-400
                  hover:underline
                  transition-all duration-300'>{name}</a>
                    </li>
                  )
                })
                }

              </ul>
            </div>
            <div className=' md:hidden '>
              {
                showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className='cursor-pointer text-2xl' />
                ) : (<HiMenuAlt3
                  onClick={toggleMenu}
                  className='cursor-pointer text-2xl' />
                )}
            </div>
          </div>
        </div>
        {/* ResSideMenu */}
        <ResSideMenu showMenu={showMenu} />
      </nav>
    </>
  )
}

export default Navbar
