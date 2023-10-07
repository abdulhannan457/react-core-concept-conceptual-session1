/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import './Cart.css'
const Cart = ({selectedActors, remaining, totalCost}) => {
  
    return (
        <div>
           <h3>Total Actors: {selectedActors.length}</h3> 
           <h4>Remaining: {remaining}</h4>
           <h4>Total Cost: {totalCost}</h4>
          {
            selectedActors.map((actor, idx)=>(<li key={idx}>{actor.name}</li>
            ))}
        </div>
    );
};

export default Cart;