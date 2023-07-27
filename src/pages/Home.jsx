import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Products from '../components/products/products';
import data from "../data";
const Home = () => {
  return (
    <>
    <Navbar />
    {data.map((item,index)=>{
return <Products 
value={false}
key={index}
id={item.id}
name={item.name}
pic={item.imgURL}
desc={item.desc}
price={item.price} />
    })}
    </>
  )
}

export default Home