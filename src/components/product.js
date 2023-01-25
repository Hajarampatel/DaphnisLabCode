import {Button} from "@material-ui/core"
import React from "react";
import { useEffect, useState } from "react";
import Categorise from "./chart";

function  Product(props) {
     
   const [data, setData] = useState(); 
   const [popup, setPopup] = useState(false);
   const close = () => setPopup(false);

   let turl = "/category/" + props.categ;
   console.log(turl);
   let url;
    if(props.categ == 'all'){ url = 'https://fakestoreapi.com/products'; }
      else {url = 'https://fakestoreapi.com/products' + turl; }

   const Fetchdata = async () => {
   const res = await  fetch(url);   
    const result = await res.json();
    setData(result);
    console.log(result);
} 

  useEffect(()=>{
    Fetchdata();
  },[props]) 
 
  return (<>
      <div className="btn">
      <Button variant="contained" onClick={() => setPopup(true)}>analysis</Button>
      {popup && <Categorise closeModel = {close}/>}
      </div>
      <div className="container">
        {data?.map(data => (
         <div className="mainDiv">
         <div className="image">
            <img src={data.image} alt=""/>
          <div className="category">
            <h4>{data.category}</h4>
          </div>
          </div>
            <div className="nameAndDescription">
           <div className="name">
            <h3>{data.title}</h3>
           </div>
           <div className="productDiscription">
            <p>{data.description}</p>
           </div>
            </div>
         </div>
     ))}
     </div>
    </>
     
  );
}

export default Product;