import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './review.css';
import ReviewService from '../OrderService/ReviewService';

function Review() {
  const { userID } = useParams(); 
  const navigate = useNavigate(); 
  const [user, setUser] = useState({});
  const [comment, setComment] = useState(); 
  const[date,setDate]=useState(new Date().toISOString().split('T')[0],)
 

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/user/getUserByUserId/${userID}`);
        if (!response.ok) {
         
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
       
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserDetails();
  }, [userID]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'comment') {
        setComment(value);
      
    } 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewData = {
      email: user.email,
      userName: user.name,
      indexNo:user.id,
      comment,
      dates:date
      
    };
      
    ReviewService.submitReview(reviewData)
      .then(() => {
        alert("Successfully submitted the review.");
        navigate(`/Reviewuser/${userID}`);
      })
      .catch((error) => {
        console.error('There was an error submitting the order!', error);
        alert("Invalid inputs");
      });
  };
  


  return (
    <div>
      <div className="Box1_r">
        <h1 className="heading_r">Your Review</h1>
        <form onSubmit={handleSubmit}>
          <div className='fo2'>
            <div className='input-group mb-5'>
          
                  <label  className='input-group-text'>Your Email</label>
               
                    <input  className='form-control col-sm-6' type="text" name="email" style={{ width: '300px'}} defaultValue={user.email} readOnly />
                  </div>
            <div className='input-group mb-5'>
                  <label  className='input-group-text' >Comment</label>
               
                    <textarea  className='form-control col-sm-6' style={{ width: '300px', height:'100px' }} type="text" name="comment" onChange={handleChange} />
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

export default Review;
