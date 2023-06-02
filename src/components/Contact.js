import React from 'react'

const Contact = () => {
  return (
    <section name='contact' className='w-full h-screen p-4'>
      <div className='flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto'>
         <div className='text-center'>
          <h2 className='text-5xl font-bold'>Contact</h2>
          <p className='py-6 text-3xl text-gray-500'>Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to</p>
         </div>
         <div className='flex items-center justify-center mt-10'>
          <form className='flex flex-col w-full md:w-1/2'>
            <input type="text" name="name" placeholder="Enter your name" className="p-2 border-2 focus:outline-none rounded-md"/>
            <input type="email" name="email" placeholder="Enter your email" className="mt-4 p-2 border-2 focus:outline-none rounded-md"/>
            <textarea type="message" name="message" placeholder="Enter your message" className="mt-4 p-2 border-2 focus:outline-none rounded-md" rows='10'/>
            <button className='duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110 my-8 mx-auto px-6 py-3'>
              Let's Talk
            </button>

          
          </form>
         </div>
      </div>
    </section>
  )
}

export default Contact
