import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './review.css';
import ReviewService from '../OrderService/ReviewService';

function ReviewEdit() {
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
      comment,
      dates:date
      
    };
      console.log(reviewData);
    ReviewService.submitReview(reviewData)
      .then(() => {
        navigate('/Reviewuser');
      })
      .catch((error) => {
        console.error('There was an error submitting the order!', error);
      });
  };
  


  return (
    <div>
      <div className="Box1_r">
        <h1 className="heading_r">Your Review</h1>
        <form onSubmit={handleSubmit}>
          <table className="Structure_r">
            <tbody>
              <tr>
                <td>
                  <label className="label_structure_r">Your Email</label>
                </td>
                <td>
                  <div className="field_structure_r">
                    <input type="text" name="email" defaultValue={user.email} readOnly />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure_r" >Comment</label>
                </td>
                <td>
                  <div className="field_structure_r">
                    <input style={{ width: '159px', height:'100px' }} type="text" name="comment" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </form>
      </div>
      <button  onClick={handleSubmit} className="button1_r" type="submit">
        Submit
      </button>
    </div>
  );
}

export default ReviewEdit;
