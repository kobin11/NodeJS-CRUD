import { useState } from "react";


function Box() {

    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [tot, setTot] =  useState(); // take tot in a state

    function handleClick()
    {
      setTot(Number(num1) + Number(num2)); // set number to the state
    }

    return (
      <div className="box">
         
        <h1>Add Two Numbers</h1>
        <label>Number 1</label>
        <input type="text" name="num1" class="form-control" onChange={(event) =>
                {
                  setNum1(event.target.value);      
                }}>
        </input>
        <label>Number 1</label>
        <input type="text"   class="form-control" onChange={(event) =>
                {
                  setNum2(event.target.value);      
                }}>
         </input> 
         <label>Total</label>
        <input type="text"   class="form-control" value={ tot }></input>   
    
        <button onClick={handleClick}  class="btn btn-warning mt-4"> Click Me</button>
      </div>
        
    );
  }
  
  export default Box;