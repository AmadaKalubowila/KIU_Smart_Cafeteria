import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewItem.css';
import { useParams ,useNavigate } from 'react-router-dom';

const Itemview2 = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const [items, setItems] = useState([]);
    const[status,setStatus]=useState('');
    const type ="Friedrice";

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/v/Item/getItemByType/${type}`, {
                validateStatus: () => true,
            });

            if (result.status === 200) {
                if (Array.isArray(result.data)) {
                    setItems(result.data);
                } else {
                    console.error('Unexpected data format:', result.data);
                    setItems([]);
                }
            } else {
                console.error('Error fetching items:', result.status, result.statusText);
            }
        } catch (error) {
            console.error('Error fetching items:');
        }
    };

    console.log(items);
    useEffect(() => {
        const fetchStatusDetails = async () => {
          try {
            const response = await fetch(`http://localhost:8080/api/status/getLatestStatusForUser`);
            if (!response.ok) {
              throw new Error('Failed to fetch status');
            }
            const SData = await response.json();
            console.log(SData)
            setStatus(SData);
           
          } catch (error) {
            console.error('Error fetching status:', error);
          }
        };
    
        fetchStatusDetails();
      }, []);
      const handleClick10= (itemID) => {
       
        console.log(status.status)
        if(status.status==0){
            alert("Can Not Put Orders Today");
            navigate(`/MainHome/${userID}`);
        }else{
            navigate(`/onlineorder/${userID}/${itemID}`)
        }
      };

    return (
       
       
        <section>

        <h1 className='headitem1'>Fried Rice</h1>
            <div className='ItemTable'>
                {items.length > 0 ? items.map((item) => (
                    <div className='item' key={item.itemId}>
                        <p className='viewbox'>{item.name}</p>
                        <p className='viewbox'><img className='image' src={`data:image/jpeg;base64,${item.image}`} alt={item.name} /></p>
                        <p className='viewbox'> Rs.{item.price}.00</p>
                        <p className='viewbox'>Available: {item.quantity}</p>
                        <button className='btn btn-outline-success btn-lg'onClick={() => handleClick10(item.itemId)}>Order Now</button>
                    </div>
                )): <p>No items found.</p>}
            </div>
      
    </section>
    );
};

export default Itemview2;
