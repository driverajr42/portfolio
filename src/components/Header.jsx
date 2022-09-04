import React from 'react'

const Header = () => {

  return (
    <div className='w-full h-screen bg-header bg-cover bg-no-repeat bg-center'>
        {/* Header Content */}
        <div className='text-mainTxt text-center '>
        <div className='py-4 px-6'>
            <h1 className='text-secondary text-base leading-loose'>Welcome, my name is</h1>
            <h2 className='text-accent text-3xl font-bold leading-7'>Dennis Rivera.</h2>
            <h3 className=' text-2xl font-bold'>Building things for the web.</h3>
            <p>Something will go here later. It will be something about what I do as a developer. Blah, blah, blah, blah. Because it will help the client determine if I am someone they are looking. Because I know I am.</p>
        </div>
            
        </div>
    </div>
  )
}

export default Header