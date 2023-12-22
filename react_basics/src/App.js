/*import React from 'react';
 import './App.css';
import Card from "./Card";
import Todo from "./Todo";

function GoalForm(props){
    const [formData, setFormData ] = React.useState({goal: "", by: ""});

    function changeHandler(e){
        setFormData({ ...formData, [e.target.name]: [e.target.value]});
    }

    function submitHandler(e){
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal: "", by: ""})
    }

    return(
        <>
            <form onSubmit={submitHandler}> 
                <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
                <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
                <button>Submit Goal</button>
            </form>    
        </>
    )
}

function ListOfGoals(props){
    return(
        <ul>
            {props.allGoals.map((g) => (
                <li key={g.goal}>
                    <span> My Goal is to {g.goal}, By {g.by} </span>
                </li>
            ))}
        </ul>
    );
}


function App() {
    const [allGoals, updateAllGoals] = React.useState([]); 
    function addGoal( goal ){
        updateAllGoals([...allGoals, goal]);
    }
    return (
        <div >
            <h1>Todo Task </h1>
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
            

        
        </div>
    );
};

export default App;
 */


/* Solution: Managing state within a component */
/* import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {
      return{
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: " Please visit our restaurant to renew your gift card.." 
      }
      
    });
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
 */

import React from "react";
import { useEffect, useState } from "react";

export default function App() {
  const [noOfChoco, setChoco] = useState(1);
  const [noOfChocoPrice, setChocoPrice] = useState(1);
  const addChoco = function(){
    setChocoPrice(num2=>num2+1)
  }
  useEffect(()=>{
    setChoco(1);
    setChocoPrice(1);
  });
  return (
    <div className="my-app">
      <h1>Chocolates = {noOfChoco}</h1>
      <h2>Price = {noOfChocoPrice}</h2>
      <button onClick={addChoco}> Add More Chocolates </button>
    </div>
  );
}

// function App() {
//   const [user, setUser] = React.useState([]);

//   const fetchData = () => {
//     fetch("https://randomuser.me/api/?results=1")
//       .then((response) => response.json())
//       .then((data) => setUser(data));
//   };

//   React.useEffect(() => {
//     fetchData();
//   }, []);

//   return Object.keys(user).length > 0 ? (
//     <div style={{padding: "40px"}}>
//       <h1>Customer data</h1>
//       <h2>Name: {user.results[0].name.first}</h2>
//       <img src={user.results[0].picture.large} alt="" />
//     </div>
//   ) : (
//     <h1>Data pending...</h1>
//   );
// }

//export default App;
