import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const BlogCard = ({ image, title, description }) => {
    return (
        <>
            <div className="">
                <div className=' overflow-hidden'>
                    <img src={image} alt=""
                        className="mx-auto h-[420px] w-full object-cover
                    hover:scale-105 duration-300"/>
                    <div className='space-y-2 p-4 ml-6 bg-white -translate-y-16'>
                        <h1 className=' line-clamp-1 text-2xl font-semibold'>{title}</h1>
                        <h1 className='line-clamp-4 text-sm text-slate-500'>{description}</h1>
                        <div className='flex justify-end pr-4'>
                            <FaArrowRight className='hover:text-blue-500 group-hvoer-tranlate-x-2 duration-300' />

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default BlogCard