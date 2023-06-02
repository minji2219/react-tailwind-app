import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Feature = () => {
  return (
    <section name='feature' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>Features</h2>
        <p className='py-8 text-2xl text-center text-gray-500'>Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.</p>
        <div className='grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='flex'>
          <FaCheck className='mt-1 mr-3 text-blue-600 w-7'/>
          <div>
          <h3 className='text-lg font-bold'>Real-Times</h3>
          <p className='pt-2 pb-4 text-lg'>Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.</p>
          </div>
        </div>

        <div className='flex'>
          <FaCheck className='mt-1 mr-3 text-blue-600 w-7'/>
          <div>
          <h3 className='text-lg font-bold'>Real-Times</h3>
          <p className='pt-2 pb-4 text-lg'>Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.</p>
          </div>
        </div>

        <div className='flex'>
          <FaCheck className='mt-1 mr-3 text-blue-600 w-7'/>
          <div>
          <h3 className='text-lg font-bold'>Real-Times</h3>
          <p className='pt-2 pb-4 text-lg'>Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.</p>
          </div>
        </div>

        <div className='flex'>
          <FaCheck className='mt-1 mr-3 text-blue-600 w-7'/>
          <div>
          <h3 className='text-lg font-bold'>Real-Times</h3>
          <p className='pt-2 pb-4 text-lg'>Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.</p>
          </div>
        </div>

      </div>
      </div>

    </section>
  )
}

export default Feature
