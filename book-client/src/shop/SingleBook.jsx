import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id,title,imageUrl}=useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2>{title}</h2>
      <img src={imageUrl} alt="fucking no image loading" className='h-96' />
    </div>
  )
}

export default SingleBook

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const SingleBook = () => {
//   const { id } = useParams(); // Use useParams to get the book ID from the URL
//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5001/book/${id}`)
//       .then(res => res.json())
//       .then(data => setBook(data))
//       .catch(error => console.error('Error fetching book:', error));
//   }, [id]);

//   if (!book) {
//     return <div>Loading...</div>;
//   }

//   const { title, imageUrl, description } = book;

//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//       <h2>{title}</h2>
//       <img src={imageUrl} alt={title} />
//       <p>{description}</p>
//     </div>
//   );
// }

// export default SingleBook;
