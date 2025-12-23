import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from 'react';

import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const Freebook = () => {

  const [books, setBook] = useState([])
  useEffect(()=>{
         const getBook = async()=>{
            try {
         const response = await axios.get("/book");
         setBook(response.data.filter((book)=>book?.category==="Free"));
            } catch (error) {
              console.log(error);
            }
         };
         getBook();
  },[])
  
   
    const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }
]
};
 
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 font-serif mt-8'>
      <div>
        <h1 className='font-semibold text-2xl pb-2'>Free Offered Courses</h1>
        <p>
  Explore our collection of free courses designed to help you learn and grow without any cost. 
  From beginner-friendly programming guides to essential computer science fundamentals, 
  these resources are perfect for students who want to build skills, gain knowledge, 
  and start their learning journey with confidence.
</p>
        </div>  
    
    <div className="slider-container">
      <Slider {...settings}>
        {
            books.map((book)=>(<Cards book={book} key={book?.id}></Cards>))
        }
      </Slider>
    </div></div>
    </>
  )
}

export default Freebook
