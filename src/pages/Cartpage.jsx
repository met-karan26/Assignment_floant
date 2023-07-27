import React from 'react'
import {useSelector} from "react-redux";
import Products from "../components/products/products";
import Navbar from '../components/Navbar/Navbar';
const Cartpage = () => {
  const data=useSelector((state)=>{
    return  state.cart.order;
   
  })
  console.log(data);
  return (
    <>
    
    <Navbar />
  {data.length>0 ? (
    data.map((item)=>{
    return(
<Products 
value="true"
id={item.id}
name={item.name}
pic={item.pic}
desc={item.desc}
price={item.price}/>)
  }))
   :<h1>Your cart is Empty</h1>} 
  </>
  )
}

export default Cartpage