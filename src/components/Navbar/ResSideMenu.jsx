import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MenuLinks } from './Navbar';

const ResSideMenu = ({ showMenu }) => {
    return (
        <div className={`${showMenu ? "left-0" : "left-[-100%]"
            } fixed bottom-0 top-0 w-[75%] transition-all duration-500 pt-20 px-10 z-50
             shadow-lg bg-blue-500`}>

            <div className='card'>
                {/* user section */}
                <div className='flex gap-3 text-white'>
                    <FaUserCircle  size={50}/>
                    <div className=' cursor-pointer'>
                        <h1 className='font-semibold' >Hello User</h1>
                        <h1 className='text-slate-400 text-sm'>Permium User</h1>
                    </div>
                </div>
            </div>
            <div>
                {/* Menu Section */}
                <nav className='mt-8 '>
                    <ul className='space-y-2 '>
                        {MenuLinks.map(({id,name,link}) =>{
                            return(
                                <li key={id}>
                                    <a href={link} 
                                    className=' mb-5 inline-block
                      cursor-pointer text-white
                  hover:text-orange-400
                  font-semibold
                  hover:border-orange-400
                  hover:underline
                  transition-all duration-300'>{" "}{name}</a>
                                </li>
                            )
                        }
                    )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ResSideMenu