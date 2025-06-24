
import React from 'react'
import Slider from "react-slick";

const TestmonialData = [
    {
        id: 1,
        name: "David Calathan - Director of Design Operaions, New York",
        text: "The results have been incredible. With Power Digital, it feeels like they're in our treach, supporting and understanding us get where we want to be.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 1,
        name: "David Calathan - Director of Design Operaions, New York",
        text: "The results have been incredible. With Power Digital, it feeels like they're in our treach, supporting and understanding us get where we want to be.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 1,
        name: "Smith - Director of Design Operaions, New York",
        text: "The results have been incredible. With Power Digital, it feeels like they're in our treach, supporting and understanding us get where we want to be.",
        img: "https://picsum.photos/103/103",
    },
]

const Testmonials = () => {
    const settings = {
        dots: true,
        arros: false,
        infinite: true,
        speed: 600,
        SliderToShow: 1,
        SliderScroll: 1,
        autoplay: false,
        cssEase: "linear",
        PauseOnHovers: true,
        PauseonFocus: true,

    }
    return (
        <>
            <div className='py-10 bg-slate-300'>
                <div className='container'>
                    {/*Testmonials */}
                    <div className='grid grid-cols-1 max-w-screen-xl mx-auto gap-6'>
                        <Slider {...settings}>
                            {TestmonialData.map(({ id, name, text, img }) =>    (
                                    <div className='my-6' key={id}>
                                        <div className='flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-lg relative'>
                                            <img src={img} alt="" 
                                            className='block mx-auto h-[300px] w-full sm:w-[200px] object-cover'/>
                                            <div className=' space-y-4'>
                                            <p className='text-gray-600 xl:pr-72'>{text}</p>
                                            <h1 className='text-xl font text-blue-600'>{name}</h1>
                                        </div>

                                        </div>
                                        
                                    </div>

                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Testmonials