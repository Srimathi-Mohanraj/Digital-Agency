import React from 'react'
import { FaWordpress } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa6";
import { MdAppShortcut } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

const skillsData = [
    {
        name: "Web Development",
        icon: <FaWordpress className='text-4xl text-blue-700' />,
        link: "#",
        subtitle: "UI/UX | PHP | Java | Wordpress",
        description: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "0"
    },
    {
        name: "eCommerce Development",
        icon: <GiNotebook className='text-4xl text-blue-700' />,
        link: "#",
        subtitle: "Magento | Shopify | Woo-commerce",
        description: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "300"
    },
    {
        name: "Mobile App Development",
        icon: <MdAppShortcut className='text-4xl text-blue-700' />,
        link: "#",
        subtitle: "iPhone | Android | Cross-platform",
        description: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "300"
    },

    {
        name: "Digital Marketing Service",
        icon: <FaCameraRetro className='text-4xl text-blue-700' />,
        link: "#",
        subtitle: "Facebook | Instagram | LinkedIn",
        description: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "900"
    },
]

const Services = () => {
    return (
        <>
            <div className=' bg-blue-200 py-12  sm:grid sm:place-items-center'>
                <div className='container my-12'>
                    {/* header section */}
                    <div className=' pb-12 text-center space-y-3'>
                        <h1 className='font-semibold text-2xl text-blue-800'>Explore Our Services</h1>
                        <p className='text-xl text-gray-900'>We are self-service data analytics software
                            that lets you create visually.</p>
                    </div>
                    {/* card section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                        {skillsData.map((skill) => (
                            <div
                                key={skill.name}
                                className='card space-y-3 sm:space-y-4 p-4'>
                                <div>{skill.icon}</div>
                                <h1 className='text-lg font-semibold'>{skill.name}</h1>
                                <h3 className='text-blue-600'>{skill.subtitle}</h3>
                                <p className='text-slate-700'>{skill.description}</p>

                            </div>
                        ))}

                    </div>

                    {/* Button section */}
                    <div className='text-center mt-4 sm:mt-8'>
                        <button className='btn-primary'>Learn More</button>
                    </div>


                </div>

            </div>

        </>

    )
}

export default Services