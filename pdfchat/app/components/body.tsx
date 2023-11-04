import React, { useState } from 'react'
import UploadBox from './uploadbox';

const Body = () => {
    const [uploaded, SetUploaded] = useState('');


    return (
        <div className='align-center justify-center'>
            <div className="flex justify-center font-bold text-4xl mt-10 ">
                <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" >PDFChat: Talk To Your PDF!</p>
            </div>

            <UploadBox/>
        </div>
    )
}