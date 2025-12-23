import React, {useState, useEffect} from 'react';
import Cards from './Cards';

import {Link} from 'react-router-dom';
import axios from 'axios';

const Course = () => {

  const [books, setBook] = useState([])
  useEffect(()=>{
         const getBook = async()=>{
            try {
         const response = await axios.get("https://book-store-app-wc75.onrender.com/book");
         setBook(response.data);
            } catch (error) {
              console.log(error);
            }
         };
         getBook();
  },[])

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto ms:px-20 px-4 font-serif '>
       <div className='mt-28  items-center flex flex-col justify-center'>
        <h1 className='text-2xl md:text-4xl '>Your Journey to Knowledge Starts <span className='text-pink-500'>Here!!!!!</span></h1>
        <p className="mt-8 text-lg max-w-3xl mx-auto text-center">
  Take the first step toward building your future today. Learn new skills, explore fresh ideas,
  and unlock opportunities through courses crafted to inspire curiosity and confidence.
</p>
<Link to="/">
<button className='bg-pink-500 mt-8  text-2xl w-[80px] text-white p-2 rounded-md hover:bg-pink-700'>Back</button>
</Link>

       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-3 ml-4'>
        {
            books.map((book)=>(
                <Cards key={book?.id} book={book}></Cards>
            ))
        }
       </div>
      </div>
    </>
  )
}

export default Course
