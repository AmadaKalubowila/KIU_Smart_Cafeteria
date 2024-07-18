import axios from 'axios';

const API_URL = 'http://localhost:8080/api/vendor'; 

class VendorService {
    getUserDetails(userID) {
        return axios.get(`${API_URL}/getUserByUserId/${userID}`);
    }
    submitVendor(vendorData) {
        return axios.post(`${API_URL}/saveVendor`,vendorData); 
    }
    updateVendor(vendorID,vendoringData) {
        return axios.put(`${API_URL}/updateVendorByVendorID/${vendorID}`,vendoringData);
    }
    deleteVendorById(vendorID) {
        return axios.delete(`${API_URL}/deleteVendorByID/${vendorID}`);
    }
}

export default new VendorService();
