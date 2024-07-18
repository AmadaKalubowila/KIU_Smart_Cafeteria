import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './review.css';
import ReviewService from '../OrderService/ReviewService';

export default function NavigationComponent() {
  const navigate = useNavigate();
  const userID = 14633; 
  const [review, setReview] = useState([]);
  
 
  const handleOrderClick5 = () => {
    navigate(`/Review/${userID}`);
  };

  useEffect(() => {
    const fetchReviewDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/reviews/getReviews`);
        if (!response.ok) {
          throw new Error('Failed to fetch review data');
        }
        const reviewData = await response.json();
        setReview(reviewData);
      } catch (error) {
        console.error('Error fetching review data:', error);
      }
    };

    fetchReviewDetails();
  }, []); 

 

  const handleEditClick = (review) => {
    
    if (userID == review.indexNo) {  
      const reviewID = review.id
      navigate(`/Review_edit/${reviewID}`);
    } else {
      alert("You can only edit your own reviews.");
    }
  };

  const handleDeleteClick = (review) => {
    const reviewID = review.id
    if (userID == review.indexNo) {
      const confirmed = window.confirm("Do you want to delete?");
      if (confirmed) {
          ReviewService.deleteReviewById(reviewID)
              .then(() => {
                  console.log("Review deleted");
                  navigate('/Reviewuser'); 
              })
              .catch((error) => {
                  console.error('There was an error deleting the review!', error);
              });
      } else {
          console.log("Order not deleted");
      }}
      else{
      alert("You can only delete your own reviews.");
      console.log("error")
      return;
    }
      
    
    
  };

  return (
    <div>
      <h1 className='heading2_r'>Reviews</h1>
      <button onClick={handleOrderClick5} className="button1_r" type="button">
        Add Review 
      </button>
      <div className="review-container">
        {review.map((review) => (
          <div className='Box2_r' key={review.id}>
            <h3>Name:</h3> 
            <h4 className='content1'>{review.userName}</h4>
            <h3>Comment:</h3>
            <h4 className='content2'>{review.comment}</h4>
            <p className='set1'>
              <button className='button3_r' onClick={() => handleEditClick(review)} type="button">Edit</button>
              <button className='button4_r' onClick={() => handleDeleteClick(review)} type="button">Delete</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
