import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/user'; 

class UserService {
    getUserDetails(userID) {
        return axios.get(`${API_URL}/getUserByUserId/${userID}`);
    }
    submitUser(userData) {
        return axios.post(`${API_URL}/saveUser`,userData); 
    }
}

export default new UserService();
