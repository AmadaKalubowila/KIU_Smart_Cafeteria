import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v/Item'; 

class ProductService {
    updateProduct(IID, itemqstock) {
        return axios.put(`${API_URL}/updateItem/${IID}`, itemqstock);
    }
}

export default new ProductService();
