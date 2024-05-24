import React from 'react'

import { MoonLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className='fixed w-full h-full left-0 top-0 bg-[#777] z-100 flex items-center justify-center' style={{ zIndex: 9999 }}>
            <MoonLoader size={150}
                className='relative z-1000'
                color="#36d7b7"
            />
        </div>
    )
}

export default Loader
