import React, {useState, useEffect} from 'react'
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {Button} from "@material-ui/core"
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


 const Categorise = ({closeModel}) => {
    const [categories, setCategories] = useState([])

    const fetchCategory = async() => {
        const res = await  fetch('https://fakestoreapi.com/products');   
        const result = await res.json();
        return result;
    }

    useEffect(() => {
        fetchCategory().then(result => setCategories(result)).catch(err => console.error(err))
    }, [])

    let count = {
        jewelery: 0,
        electronics: 0,
        "women's clothing": 0,
        "men's clothing": 0
      }

    for(let i=0; i<categories.length; i++) {
        let currentCategory = categories[i].category;
        count[currentCategory]++;       
    }


    const data = {
        datasets: [{
            data: [count["jewelery"], count["electronics"],count["women's clothing"], count["men's clothing"] ],
            backgroundColor:[
              'red',
              'blue',
              'yellow',
              'pink'
            ]
        },
      ],
      labels: [
          'jewelery',
          'electronics',
          "women's clothing",
          "men's clothing"
      ], 
    };

  return (
        <>
      <div className="modal-wrapper"></div>
       <div className='modal-container'>
      <div className="App" style={{width:'50%', height:'40%'}}>
        <Button className='btn-close' onClick={closeModel}  style={{backgroundColor:  "#21b6ae"}} variant='contained'>Close</Button>
       <Doughnut data={data}/>
    </div>
    </div>
    </>
  )
}

export default Categorise;
