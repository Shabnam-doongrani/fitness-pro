import React from 'react'
import { motion } from "framer-motion";
import heroIamge from "../assets/fitness-B8CUCReL.png";

const Hero = () => {
  return (
    <section className='bg-white text-black dark:bg-neutral-800 dark:text-white'>
      <div className='container  mx-auto px-8 flex justify-between items-center py-12 h-[650px]'>

        {/* left content */}
        <motion.div
          className='max-w-lg'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className='text-sm uppercase font-semibold tracking-wide text-neutral-500 dark:text-neutral-400'>
            WORK SMARTER. ACHIEVE MORE
          </p>

          <h1 className='text-5xl font-bold leading-tight mt-5'>
            Simple fitness <br />
            experience for everyone
          </h1>

          <p className='mt-6 text-gray-600 dark:text-gray-300 text-sm'>
            Track your workouts, get better results, and be the best version of you.
            Less thinking, more lifting.
          </p>

          <div className='flex gap-4 mt-8'>
            <button className='px-6 py-3 rounded-full border border-gray-300 dark:border-neutral-600 bg-orange-400 hover:bg-gray-100 dark:hover:bg-orange-500'>
              Get Started
            </button>

            <button className='px-6 py-3 rounded-full border border-gray-300 dark:border-neutral-600  hover:bg-gray-100 dark:hover:bg-neutral-900'>
              View pricing
            </button>
          </div>
        </motion.div>

        {/* right content */}
<motion.div
  className='mt-12 md:mt-0 w-full flex justify-end pr-8 lg:pr-16'
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <img 
    src={heroIamge} 
    alt="fitness" 
    className='w-[550px] drop-shadow-2xl'
  />
</motion.div>
      </div>
    </section>
  )
}

export default Hero