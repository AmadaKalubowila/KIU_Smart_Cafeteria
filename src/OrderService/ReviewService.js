import axios from 'axios';

const API_URL = 'http://localhost:8080/api/reviews';
class ReviewService {
    submitReview(reviewData) {
        return axios.post(`${API_URL}/saveReview`,reviewData); 
    }
    getReviewById(reviewID) {
        return axios.get(`${API_URL}/getReviewByReviewID/${reviewID}`);
    }

    updateReview(ordersID, orderingData) {
        return axios.put(`${API_URL}/updateOrderByOrderID/${ordersID}`, orderingData);
    }

    deleteReviewById(id) {
        return axios.delete(`${API_URL}/deleteReviewByReviewID/${id}`);
    }
}

export default new ReviewService();