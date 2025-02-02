import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observe hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import {fadeIn} from '../variants';

const About = () => {
  const[ref,inView]=useInView({
    threshold:0.5,
  });

  return(
   <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
         className='flex-1 bg-about bg-contain bg-no-repeat h-[418px]
        mix-blend-lighten bg-top'></motion.div>
        {/* text */}
        <motion.div 
         variants={fadeIn('left',0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm an Enthusiastic Front-end developer with a passion for creating dynamic and engaging user interfaces
             </h3>
             <p className='mb-6'>
             Front-end development is like building the face of a website, making it both functional
             and beautiful for users to interact with.
             Front-end development is like building the face of a website, making it both functional
             and beautiful for users to interact with.
             </p>
             <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  
                 {inView ? <CountUp start={-3} end={1} duration={3}/> : null}
                </div>
                <div>Year of<br/>
                Hands-on Projects
                </div>
              </div>
              
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  
                 {inView ? <CountUp start={-1} end={4} duration={3}/> : null}
                </div>
                <div>Projects<br/>
                Completed 
                </div>
              </div>
             </div>
             <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a hef='#' className='text-gradient btn-link'>

              </a>
             </div>
        </motion.div>
      </div>
    </div>
  
  </section>
  );
};

export default About;
