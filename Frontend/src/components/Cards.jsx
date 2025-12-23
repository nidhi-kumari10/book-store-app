import React from 'react'

const Cards = ({book}) => {
  return (
 <>
 <div className='mt-8'>
    <div className="card bg-base-100 w-96 shadow-sm border border-pink-500 transform transition duration-300 ease-in-out 
                hover:scale-105  hover:border-pink-500">
  <figure>
    <img
      src={book?.imageLink}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold ">
      {book?.title}
      <div className="badge badge-secondary h-[36px]">{book?.category}</div>
    </h2>
    <p>{book?.description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-2 border font-semibold">${book?.price}</div>
      <div className="cursor-pointer badge badge-outline p-2 font-semibold hover:bg-pink-500 duration-300 border">Buy Now!</div>
    </div>
  </div>
</div>
 </div>
 </>
  )
}

export default Cards
