import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/user'; 

class UserService {
    getUserDetails(userID) {
        return axios.get(`${API_URL}/getUserByUserId/${userID}`);
    }
    submitUser(userData) {
        return axios.post(`${API_URL}/saveUser`,userData); 
    }
    updateUser(UID,userData) {
        return axios.put(`${API_URL}/updateUserByUserID/${UID}`,userData);
    }
    deleteUserById(UID) {
        return axios.delete(`${API_URL}/deleteUserByID/${UID}`);
    }
}

export default new UserService();
