import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router';

const NavBar = () => {



    return (
        <nav className="bg-white border border-b-black border-opacity-40">
            <div className="flex flex-row justify-between"/>
                <div className='flex items-center gap-3'>
                    <div className="text-xl ">
                        <Link href="/"><Image src="/adaptive-icon.png" alt="Logo" height={60} width={60}/></Link>
                    </div>
                </div>
            <div className="mt-2 mb-2 flex flex-row mr-4">
    
            </div>
        </nav>  
    )
}