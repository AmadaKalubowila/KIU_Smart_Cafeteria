import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './review.css';
import ReviewService from '../OrderService/ReviewService';

function ReviewEdit() {
  const { reviewID } = useParams(); 
  const { userID } = useParams(); 
  
  const navigate = useNavigate(); 
  const [review, setReview] = useState({});
  const [comment, setComment] = useState(); 
  const[date,setDate]=useState(new Date().toISOString().split('T')[0],)
 

  useEffect(() => {
    const fetchReviewDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/reviews/getReviewByReviewID/${reviewID}`);
        if (!response.ok) {
         
          throw new Error('Failed to fetch review data');
        }
        const reviewData = await response.json();
        setReview(reviewData);
        setComment(reviewData.comment);
        
      } catch (error) {
        console.error('Error fetching review data:', error);
      }
    };

    fetchReviewDetails();
  }, [reviewID]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'comment') {
        setComment(value);
      
    } 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewData = {
      id:reviewID,
      email:review.email,
      userName:review.userName,
      indexNo:review.indexNo,
      comment,
      dates:date
      
    };
      console.log(reviewData);
      console.log(reviewID);
    ReviewService.updateReview(reviewID,reviewData)
      .then(() => {
       alert("Successfully editted the review.");
        navigate(`/Reviewuser/${userID}`);
      })
      .catch((error) => {
        
        console.error('There was an error submitting the review!', error);
        alert("Invalid inputs");
      });
  };
  


  return (
    <div>
      <div className="Box1_r">
        <h1 className="heading_r">Your Review</h1>
        <form onSubmit={handleSubmit}>
          <div  className='fo2'>
            <div className='input-group mb-5' >
           
                  <label className='input-group-text'>Your Email</label>
                
                    <input  className='form-control col-sm-6' type="text" name="email" defaultValue={review.email} readOnly />
                  </div>
              <div className='input-group mb-5'>
                  <label className='input-group-text' >Comment</label>
                
                    <input   className='form-control col-sm-6' style={{ width: '159px', height:'100px' }} type="text" name="comment"defaultValue={review.comment} onChange={handleChange} />
                  </div>
             </div>
        </form>
      </div>
      <button  onClick={handleSubmit} className="buttonr1" type="submit">
        Submit
      </button>
    </div>
  );
}

export default ReviewEdit;
