import React from 'react';

const Article = ({ title, image, path }) => (
  <div className=" ml-20 mr-20 mt-14 mb-10 flex justify-center items-center justify-items-center">
    
    <img src={image} alt={title} className='rounded-3xl w-60 h-60 object-cover'/>
    
    <div className='w-72  self-start ml-6'>
    <p className='text-2xl leading-10 font-semibold text-gray-800 mb-5'>{title}</p>
    <a href={path} className='text-blue-400 text-semibold cursor-pointer underline'>Read More</a>
    </div>
  
  
  </div>
);

export default Article;


