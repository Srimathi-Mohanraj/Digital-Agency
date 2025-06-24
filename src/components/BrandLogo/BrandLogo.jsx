import React from 'react'
import Clickup from "../../assets/brand/Clickup.svg"
import Dropbox from "../../assets/brand/Dropbox.svg"
import GitHub from "../../assets/brand/GitHub.svg"
import Intuit from "../../assets/brand/Intuit.svg"
import Segment from "../../assets/brand/Segment.svg"


const BrandLogo =()=> {
  return (
    < >
     <div className='container py-12 '>
      <h1 className='text-center'>Powering next-gen companies</h1>
      <div className='flex flex-wrap items-center justify-evenly gap-3
      py-6 md:px-30'>
        <img src={Clickup} alt="" />
        <img src={Dropbox} alt="" />
        <img src={GitHub} alt="" />
        <img src={Intuit} alt="" />
        <img src={Segment} alt="" />
      </div>
     </div>
    </>
   
  )
}

export default BrandLogo