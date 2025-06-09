import React, { useState, useEffect } from 'react';
import { useNavigate ,useParams} from 'react-router-dom';
import './review.css';
import ReviewService from '../OrderService/ReviewService';

export default function NavigationComponent() {
  const navigate = useNavigate();
  const {userID}= useParams();
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
      navigate(`/Review_edit/${userID}/${reviewID}`);
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
                  navigate(`/Reviewuser/${userID}`); 
                  setReview(prevReviews => prevReviews.filter(r => r.id !== reviewID));
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
      <p className='heading2_r'>Reviews</p>
      <button onClick={handleOrderClick5} className="button1_r" type="button">
        Add Review 
      </button>
      <div className="review-container">
        {review.map((review) => (
          <div className='Box2_r' key={review.id}>
            <h3>Name:</h3> 
            <p className='content1'>{review.userName}</p>
            <h3>Comment:</h3>
            <p className='content2'>{review.comment}</p>
            <p className='set1'>
              <button className='btn btn-success btn-lg btn-space' onClick={() => handleEditClick(review)} type="button">Edit</button>
              <button className='btn btn-danger btn-lg ' onClick={() => handleDeleteClick(review)} type="button">Delete</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
