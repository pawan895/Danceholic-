import React from 'react'
import fox from './assests/fox.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import { PurpleButton } from '../Components/NavBar'



function Home() {
    return (
        <section className='mx-auto  max-w-7xl px-2 bg-darkblue sm:px-6 lg:px-8 '>
            <div className='flex flex-col lg:my-8 lg:flex-row lg:gap-10 '  >
                <div className='min-w-[50%] justify-center max-w-lg px-8 py-20 mx-auto lg:max-w-xl lg:pt-32 '>
                    <h1 className='text-heading text-3xl md:text-4xl pb-2 lg:text-5xl' >Unleash Your Inner <br />Dancer with AI</h1>
                    <p className='text-paragraph pb-5'>Revolutionize your dance journey with Danceholic's machine learning. Elevate your skills with personalized feedback and tailored recommendations."</p>
                    <PurpleButton to='/levels' name='Try for free' />
                </div>

                <div className='min-w-full px-4 py-4 md:mx-64 lg:min-w-fit lg:mx-16 lg:p-12' id='animation'>
                    <div className='w-52 mx-14 my-6 md:mx-24 md:my-16 lg:w-72 lg:pb-24'>
                        <Lottie animationData={fox} />
                    </div>
                </div>
            </div>


        </section>

    )


}


export default Home;
