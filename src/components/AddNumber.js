import { useState } from "react";


function AddNumber() {

    const [m1, setMarks1] = useState();
    const [m2, setMarks2] = useState();
    const [m3, setMarks3] = useState();
    const [tot, setTot] =  useState(); // take tot in a state
    const [average, setAvg] =  useState(); // take tot in a state
    const [gradee, setGrade] =  useState(); // take tot in a state
    var total;
    var grade;
    var avg;
function handleClick()
{
 // setTot(Number(num1) + Number(num2)); // set number to the state
  total= Number(m1) + Number(m2) + Number(m3);
  setTot(total); 

  avg =  Number(total/3);

  setAvg(avg); 

  if(avg > 70)
  {
    grade = "A"
  }
  else if(avg > 50)
  {
    grade = "B"
  }
  else
  {
    grade = "F"
  }

  setGrade(grade); 

}

    return (
      <div  class="container">
   
        <h1>Student Marks Calculation</h1>
       <div class="form-group">
        <label>Marks 1</label>
        <input type="text" name="m1" class="form-control" onChange={(event) =>
                {
                  setMarks1(event.target.value);      
                }}>
        </input>
        </div>

        <div class="form-group">
        <label>Marks 2</label>
        <input type="text" name="m2"  class="form-control" onChange={(event) =>
                {
                  setMarks2(event.target.value);      
                }}>
         </input> 
         </div>


         <div class="form-group">
        <label>Marks 3</label>
        <input type="text" name="m3"  class="form-control" onChange={(event) =>
                {
                  setMarks3(event.target.value);      
                }}>
         </input> 
         </div>

         <div class="form-group">
         <label>Total</label>

        <input type="text"   class="form-control" value={ tot }></input>   
        </div>
        <div class="form-group">
        <label>Average</label>
        <input type="text"   class="form-control" value={ average }></input>   
        </div>
        <div class="form-group">
        <label>Grade</label>
        <input type="text"   class="form-control" value={ gradee }></input>   
        </div>
        <button onClick={handleClick}  class="btn btn-warning mt-4"> Click Me</button>
      </div>

            
        
    );
            
}
  export default AddNumber;