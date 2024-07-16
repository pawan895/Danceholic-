import React from 'react'


function About() {
    return (
        <section className='mx-auto max-w-7xl px-2 bg-darkblue sm:px-6 lg:px-8'>

            <div className='flex flex-col gap-8 mx-10 pt-6 text-left lg:flex-row lg:pl-24'  >
                <div  className='pt-2 max-w-lg lg:pt-24'>
                    <h1 className='text-heading text-4xl pb-2 lg:text-5xl' >Dance, Match, Improve<br /> with Machine Learning</h1>
                    <p className='text-paragraph pb-5'>Danceholic is the ultimate dance game that combines movement with machine learning. Match your dance moves to videos, receive personalized feedback, and elevate your skills to new levels of excellence</p>
                </div>
                <img className='w-64 mx-auto lg:w-64' src="./images/astroMan.png" alt="Astro Bro" />
            </div>

            <div className='flex flex-col-reverse gap-8 mx-10 my-0 text-left lg:flex-row lg:text-right'>

                <img className='w-64 mx-auto lg:w-72' src="./images/djRobo.png" alt="DJ Robo" />

                <div className='pt-12 lg:ml-32 max-w-lg lg:pt-24'>
                    <h1 className='text-heading text-4xl pb-2 lg:text-5xl' > Elevate Your Dance <br />Skills with AI.</h1>
                    <p className='text-paragraph pb-5'>Danceholic's scoring system and performance reports offer real-time feedback and personalized insights to elevate your dance skills. Track your progress, refine your technique, and unlock your full potential in a transformative dance experience</p>
                </div>

            </div>



        </section>
    )


}

export default About;
