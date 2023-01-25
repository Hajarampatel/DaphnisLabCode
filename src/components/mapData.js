import React from "react";
import { useState, useEffect } from "react";
import Product from "./product";
import Categorise from "./chart";




  function MapData() {
 
  const [category, setCategory] = useState();    
  const [selectedCategory, setSelectedCategory] = useState("all");  
  
  

    const FetchCategory = async () => {
     const res = await  fetch('https://fakestoreapi.com/products/categories');   
      const result = await res.json();
      setCategory(result);
      console.log(result);
  }
  
    useEffect(()=>{
      FetchCategory();
    },[]) 

   
    let handleChange = (e) =>{
      const val =e.target.value;
      setSelectedCategory(val);
      console.log(val);
    }


  return (
  <>
   <div className="navbar">
    <h1>Company</h1>
    <div className="option">
    <select className="navbar-option"  onChange={handleChange}>
      <option value="all">All</option>
      {category?.map(category => (
      <option value={category}>{category}</option>
      ))}
   </select>
    </div>
    <input type="text" className="search" placeholder="Search" />
   </div>
   <Product categ ={selectedCategory} />
  </>

  );
}


export default MapData;