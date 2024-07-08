import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products/details'; 

class ProductService {
    getProductDetails() {
        return axios.get(`${API_URL}/details`);

    }
}

export default new ProductService();
