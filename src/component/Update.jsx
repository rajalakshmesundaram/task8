import { useDispatch, useSelector } from "react-redux"
import { totalPriceOfPhone, totalQuantityOfPhone } from "../features/OperationSlice";
import { useEffect } from "react";


export const Update = () => {
   
const dispatch=useDispatch()
 
  const totalPrice = useSelector(state => state.opReducer.totalPrice); 
  const totalQuantity = useSelector(state => state.opReducer.totalQuantity);
   const products = useSelector(state => state.opReducer.products);


    const calculatePrice = () => {
        dispatch(totalPriceOfPhone());
    };
    const calculateQuantity = () => {
        dispatch(totalQuantityOfPhone());
    };


   
    useEffect(() => {
        calculatePrice();
        calculateQuantity();
    }, [products]);
   
  return (
     <div>
        <div className="container">
        <div className="card text-center">
  
  <div className="card-body">
    <h5 className="card-title">TotalPrice={totalPrice}</h5>
    <p className="card-text">TotalQuantity={totalQuantity}</p>
   
  </div>
  
</div>
    </div>
    </div>
  )
}
