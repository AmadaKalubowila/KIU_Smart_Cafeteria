import axios from 'axios';

const API_URL = 'http://localhost:8080/api/reviews';
class ReviewService {
    submitReview(reviewData) {
        return axios.post(`${API_URL}/saveReview`,reviewData); 
    }
    getReviewById(reviewID) {
        return axios.get(`${API_URL}/getReviewByReviewID/${reviewID}`);
    }

    updateReview(reviewID,reviewData) {
        return axios.put(`${API_URL}/updateReviewByReviewID/${reviewID}`,reviewData);
    }

    deleteReviewById(reviewID) {
        return axios.delete(`${API_URL}/deleteReviewByReviewID/${reviewID}`);
    }
}

export default new ReviewService();