import React from 'react'

const Feedback = () => {
  const image ='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150807_176%2Fe2voo_1438935101901YtpDh_PNG%2F%25B9%25AB%25C1%25A6-1.png&type=a340'
  return (
    <section name='testimonials' className='w-full my-24 text-white bg-slate-700 '>
      <div className='max-w-6xl px-5 text-center py-12 mx-auto'>
        <h2 className='text-4xl font-bold'>Testimonials</h2>
        <p className='py-8 text-2xl text-white'>Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to</p>
        
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3'>
            <img src={image} className='w-16 -mt-14 rounded-full' alt='person'/>
            <h5 className='text-lg font-bold'>Minji Seo</h5>
            <p className='text-sm'>My name is minji Seo i think this site is good. My name is minji Seo i think this site is good.</p>
          </div>

          <div className='hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3'>
            <img src={image} className='w-16 -mt-14 rounded-full' alt='person'/>
            <h5 className='text-lg font-bold'>Minji Seo</h5>
            <p className='text-sm'>My name is minji Seo i think this site is good. My name is minji Seo i think this site is good.</p>
          </div>

          <div className='hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3'>
            <img src={image} className='w-16 -mt-14 rounded-full' alt='person'/>
            <h5 className='text-lg font-bold'>Minji Seo</h5>
            <p className='text-sm'>My name is minji Seo i think this site is good. My name is minji Seo i think this site is good.</p>
          </div>
        </div>
        
        <button className='px-6 py-3 my-8 duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110'>
          Get Started
        </button>
      
      </div>
    </section>
  )
}

export default Feedback
