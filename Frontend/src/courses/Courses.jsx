import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'


const Courses = () => {
   
  return (
    <>
      <Navbar/>
      <div className='min-h-screen ml-20'>
  <Course/>

      </div>
      <Footer/>
    </>
  )
}

export default Courses
