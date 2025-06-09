import fried from './images/FRIED-RICE.jpg';
import kottu from './images/KOTHTHU.jpg';
import curry from './images/RICE-&-CURRY.jpg';
import other from './images/food.jpg';
import { useNavigate, useParams } from 'react-router-dom';

function MidesiteStu(){
    const { userID } = useParams();
    const navigate = useNavigate();
    const handleClick1= () => {
        navigate(`/CategoryKottu/${userID}`);
      };

      const handleClick2= () => {
        navigate(`/CategoryRice/${userID}`);
      };

      const handleClick3= () => {
        navigate(`/CategoryOther/${userID}`);
      };

      const handleClick4= () => {
        navigate(`/CategoryFriedRice/${userID}`);
      };
      
     
    return (
        <>
       

        <div className="cat-text">
            Category
        </div>

        <div className="food-grid">
            <div className="food-block">
                <div>
                    <img className="food-img" src={fried} alt="rice"/>
                </div>

                <div className="food-button">
                    <button className="food-titel1"  onClick={handleClick4}>
                        <h6 className='cat-Name'>FRIED RICE</h6> 
                    </button>
                </div>

            </div>

            <div className="food-block">
                <div>
                    <img className="food-img" src={kottu} alt="kottu" />
                </div>
                <div className="food-button">
                    <button className="food-titel1" onClick={handleClick1}>
                        <h6 className='cat-Name'>KOTTU</h6>
                    </button>
                </div>

            </div>

            <div className="food-block">
                <div>
                    <img className="food-img" src={curry} alt="curry"/>
                </div>
                <div className="food-button">
                    <button className="food-titel1"  onClick={handleClick2}>
                        <div>
                            <h6 className='cat-Name'>RICE & CURRY</h6>
                        </div>
                        
                    </button>
                </div>

            </div>

            <div className="food-block">
                <div>
                    <img className="food-img" src={other} alt="other" />
                </div>
                <div className="food-button">
                    <button className="food-titel1"  onClick={handleClick3}>
                        <div>
                            <h6 className='cat-Name'>OTHERS</h6>
                    </div>
                    </button>
                </div>

            </div>
        </div>

    </>
    );
}


export default MidesiteStu;