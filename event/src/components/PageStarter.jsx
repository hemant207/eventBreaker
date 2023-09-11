import React from 'react'
import page from '../assets/page1.jpg'


function PageStarter({imgSrc,imgText,img_H}) {
  return (
    <>
    <div className='h-24'>

    </div>
    <div className='bg-black relative'>
        <div className='pageStartBG opacity-60'>
            <img src={ imgSrc || page}  style={{'width':'100%', 'height':`${img_H || '70vh'}`,'objectFit':'cover'}} ></img>
        </div>

        <div className='absolute z-8 inset-1/4'>
            <h1 className="text-5xl font-bold p-10 text-white border-solid border-2">
            {imgText || 'Unstoppable'}
            </h1>
        </div>
        
    </div>
    </>
  )
}

export default PageStarter