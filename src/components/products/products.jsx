/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./products.css";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../store/slices/Cart";
import { Link } from "react-router-dom";

const products = (props) => {
  
  const dispatch= useDispatch();
 
const handelClick=(props)=>{

dispatch(addToCart(props));
alert(`${props.name},added to cart`)
}
    
  return (
    <div className="page">
     {props.value===false && <div className="container bar">
        <div className="message">✅ Item has been added to your cart.</div>
        <div>
          <Link to="/carts" className="btn">View Cart</Link>
        </div>
      </div>}

      <div className="card">
        <div>
          <img
            src={props.pic}
            alt={props.name} className="imgsize"
          />
        </div>

        <div className="detail">
          <h2>{props.name}</h2>
          <h4>
            <s>₹400</s>₹{props.price} <sub>+ Free Shipping</sub>
          </h4>
          <p>
            {props.desc}
          </p>
          <div>
          {props.value===false ? <button className="btn cartbtn" onClick={()=>handelClick(props)}>ADD TO CART</button>:<button className="btn cartbtn red" onClick={()=>dispatch(deleteFromCart(props.id))}>REMOVE</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
