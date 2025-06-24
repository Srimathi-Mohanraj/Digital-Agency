import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";




const FooterLinks = [
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Features",
        link: "/#features",
    },
    {
        title: "Works",
        link: "/#Works",
    },
    {
        title: "Career",
        link: "/#career",
    },
]
const HelpLinks = [
    {
        title: "Customer Support",
        link: "/#support",
    },
    {
        title: "Delivery Details",
        link: "/#delivery-details",
    },
    {
        title: "Terms & Conditions",
        link: "/#terms",
    },
    {
        title: "Privacy Policy",
        link: "/#policy",
    },
]
const ResourcesLinks = [
    {
        title:"Free Ebooks",
        link:"/#ebooks",
    },
    {
        title:"How to Blog",
        link:"/#blogs",
    },
    {
        title:"Emails",
        link:"/#emails",

    },
]

const Footer = props => {
    return (
        <>
            <div className='bg-black/80 text-white'>
                <div className='container'>
                    <div className="grid md:grid-cols-3 py-5">
                        {/* company details */}
                        <div className='py-8 px-4'>
                            <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                                Digital Agency
                            </h1>
                            <p className='text-sm'>Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Neque odit
                                reprehenderit quisquam molestias ipsa, cum
                                tenetur eveniet odio asperiores doloribus
                                perferendis atque. Deleniti error sapiente
                                ex praesentium repudiandae porro eveniet{""}</p>
                            <br />
                            {/* social handle */}
                            <div className='flex items-center gap-4 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-2xl hover:text-blue-700 duration-300' />
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-2xl hover:text-blue-700 duration-300' />
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-2xl hover:text-blue-700 duration-300' />
                                </a>
                            </div>
                        </div>
                        {/* links */}
                        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2  md:pl-10'>
                            {/* First col    */}
                            <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Company</h1>
                                    <ul className="space-y-3">
                                        {ResourcesLinks.map((link) => (
                                            <li key={link.title} className='cursor-pointer hover:translate-x-1 duration-300
                                                hover:!text-blue-400 space-x-1'>
                                                <span>{link.title}</span>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* second col */}
                             <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Help</h1>
                                    <ul className="space-y-3">
                                        {HelpLinks.map((link) => (
                                            <li key={link.title} className='cursor-pointer hover:translate-x-1 duration-300
                                                hover:!text-blue-400 space-x-1'>
                                                <span>{link.title}</span>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* third col */}
                              <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Resources</h1>
                                    <ul className="space-y-3">
                                        {ResourcesLinks.map((link) => (
                                            <li key={link.title} className='cursor-pointer hover:translate-x-1 duration-300
                                                hover:!text-blue-400 space-x-1'>
                                                <span>{link.title}</span>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}



export default Footer