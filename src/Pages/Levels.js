import React from 'react'
import { Link } from 'react-router-dom'
import { PurpleButton } from '../Components/NavBar'



function Levels() {
    return (
        <>
            <div className='h-screen w-screen bg-green overflow-y-scroll scrollbar-hide' id='levels-page'>
                <div className='flex flex-col items-center justify-center h-screen'>
                <img src="./images/littleDino.png" alt="dino" />
                    <PurpleButton
                        to='/level/1'
                        name='Level 1'
                    />
                    <PurpleButton
                        to='/level/2'
                        name='Level 2'
                    />
                    <PurpleButton
                        to='/level/3'
                        name='Level 3'
                    />
                    <PurpleButton
                        to='/level/4'
                        name='Level 4'
                    />
                </div>

            </div>
        </>



    )


}

export default Levels