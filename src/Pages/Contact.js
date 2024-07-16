import React, { useState } from 'react';


function Contact() {
    
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
    return (
        <section className=''>
            <div className='flex flex-col'>

                <div className='my-8 mx-auto'>
                    <img src="./images/mail.png" alt="Mail dino" />
                </div>

                <div className='text-center p-4 mx-auto md:max-w-lg lg:max-w-lg'>
                    <h2 className='text-heading text-3xl pb-2 lg:text-5xl'>
                        Connect, Groove, and Let's Talk!
                    </h2>
                    <p className='text-paragraph pb-5'>
                        Let's dance together! Reach out to us for any inquiries, feedback, or just to say hello. We're here to connect and chat about the wonderful world of dance and technology.
                    </p>
                    <div className="bg-darkblue flex items-center justify-center">
                        <form
                            className="bg-darkblue p- border border-purple rounded-md flex"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="email"
                                className="w-4/5 px-4 py-2 outline-none rounded-l-md text-white bg-darkBlue border-purple"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className="w-2/5 py-2 px-4 bg-purple text-white rounded"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )


}

export default Contact;
