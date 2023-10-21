import React from 'react'
import Image from 'next/image'
import style from './banner.module.css'
import bannerSvg from '@/public/logo-Image/homeBanner.svg'
const Banner = () => {
  return (
    <div className={` ${style.bgColor} w-100 vh-100 position-relative  px-5`}>
        <div className='position-absolute  top-0 end-0' >
            <Image src={bannerSvg} width={500} height={500} className='h-100 ms-auto ' alt='banner Svg' />
        </div>
        <div className='w-100  h-100 d-flex justify-content-center align-items-center ' >
                <div className='d-flex ' >
                        <button>hello</button>
                        <input type="text" />
                        <span>Icon</span>
                </div>
        </div>
    </div>
  )
}

export default Banner