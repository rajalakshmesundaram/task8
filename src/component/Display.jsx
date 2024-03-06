import { useDispatch, useSelector } from "react-redux"
import './style/Display.css'
import { decreaseQuantity, increaseQuantity, removeCart } from "../features/OperationSlice"

export const Display = () => {

    const operationstateValue=useSelector((state)=>state.opReducer.products)
    const dispatch=useDispatch()
    const handleIncrease = (id, quantity) => {
    dispatch(increaseQuantity({ id ,quantity}));
  };
    const handleDecrease =(id,quantity)=>{
        dispatch(decreaseQuantity({id ,quantity}))
    }
    const handleRemove=(id)=>{
        dispatch(removeCart({id}))
    }
  return (
   <div className="container mt-5">
 
    {operationstateValue.map((item,index)=>(
    <div className="card mb-3"  key={index}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {item.thumbnail} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">Price:{item.price}</p>
        <p className="card-text">Category:{item.category}</p>
        <p className="card-text">Brand:{item.brand}</p>
        <button onClick={()=>{handleIncrease(item.id,item.quantity || 0)}}>+</button>Quantity:{item.quantity}
        <button onClick={()=>{handleDecrease(item.id , item.quantity || 0)}}>-</button><br/><br/>
        <button className="btn btn-danger" onClick={()=>{handleRemove (item.id)}}>Remove Cart</button>
      </div>
    </div>
  </div>
</div>
))}

       </div>
     
       
    )
  
}
