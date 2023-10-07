/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import './Home.css'
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';

const Home = () => {
const [allActors, setAllactors] = useState([])

const [selectedActors, setSelectedActors] = useState([])

const [remaining, setRemaining] = useState(0)
 
const [totalCost, setTotalCost] = useState(0)

    useEffect(()=>{
        fetch('./Data.json')
        .then(res=> res.json())
        .then(data=>setAllactors(data))
    },[])

const handleSelectActor = (actor) =>{
    const isExist = selectedActors.find((item)=> item.id === actor.id)
    let count = actor.salary;
    if(isExist){
      return  alert('already he booked')
    }
    else{
       selectedActors.forEach((item) => {
        count =  count + item.salary
       })

const totalRemaining = 20000 - count;
    if(count > 20000){
        return alert('money finish')
    }
else{
    setTotalCost(count)
    setRemaining(totalRemaining)
}









    
   


        const newSelectedActors = [...selectedActors, actor]
        setSelectedActors(newSelectedActors)
    }
 
  
}


    return (
        <div className='container'>

           <div className="home-container">

           <div className="card-container">

            {
                allActors.map(actor=>(
                    // first card start
                <div key={actor.id} className="card">
    
    <div className="card-img">
        <img className='photo' src={actor.image} alt="" />
    </div>
    <h2>{actor.Name}</h2>
    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, laudantium!</small></p>
    <div className="info">
        <p>salary: {actor.salary}</p>
        <p>{actor.role}</p>
    </div>
    <button onClick={()=>handleSelectActor(actor)} className='card-btn'>select</button>
    
             {/* first card end */}
              </div>))
            }
           </div>
         <div className="cart">
            <Cart selectedActors={selectedActors} remaining={remaining} totalCost={totalCost}></Cart>
         </div>
         
           </div>
        
        </div>
      
    );
};

export default Home;