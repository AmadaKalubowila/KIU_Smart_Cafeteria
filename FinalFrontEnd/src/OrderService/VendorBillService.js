import axios from 'axios';

const API_URL = 'http://localhost:8080/api/vBill';
class VendorBillService {
    submitVBill(billData) {
        return axios.post(`${API_URL}/saveBill`,billData); 
    }
    getBillById(ordersID) {
        return axios.get(`${API_URL}/getOrderByOrderID/${ordersID}`);
    }

    updateVBill(VbillID, BillingData) {
        return axios.put(`${API_URL}/updateVendorBillByBillID/${VbillID}`,BillingData);
    }

    deleteVBillById(VbillID) {
        return axios.delete(`${API_URL}/deleteVendorBillByBillID/${VbillID}`);
    }
}

export default new VendorBillService();