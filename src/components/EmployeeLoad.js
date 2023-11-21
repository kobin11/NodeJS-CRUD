import axios from 'axios';
import {useEffect, useState } from "react";

function EmployeeLoad()
{
  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [users, setUsers] = useState([]);

useEffect(() => {
  (async () => await Load())();
  }, []);




  async function  Load()
  {
     const result = await axios.get(
         "http://127.0.0.1:8000/api/employees");
         setUsers(result.data);
         console.log(result.data);
  }
 
    
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://127.0.0.1:8000/api/save",
        {
        
          name: name,
          address: address,
          mobile: mobile
        
        });
          alert("Employee Registation Successfully");
          setId("");
          setName("");
          setAddress("");
          setMobile("");
          Load();
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
   async function editEmployee(users)
   {
    setName(users.name);
    setAddress(users.address);
    setMobile(users.mobile); 
 
    setId(users.id);
    
   }



   async function DeleteEmployee(id)
   {
       
        await axios.delete("http://127.0.0.1:8000/api/delete/" + id); 
        alert("Employee delete Successfully");
        Load();
   
   }



   async function update(event)
   {
    event.preventDefault();

   try
       {

       // console.log('Let Aifos Si Prahs know what is here', users);
        
        await axios.put("http://127.0.0.1:8000/api/update/"+ users.find(u => u.id === id).id || id,
       {
         id: id,
         name: name,
         address: address,
         mobile: mobile
       
       });
         alert("Employee Registation Updateddddd");
         setId("");
         setName("");
         setAddress("");
         setMobile("");
         Load();
       
       }
   catch(err)
       {
         alert("User Registation Failed");
       }
  }



 
    















  if (users.length <= 0) return null;

  return (
    <div>
       <h1>Employee Details</h1>
       <div class="container mt-4" >
          <form>
              <div class="form-group">
               <input  type="text" class="form-control" id="employee_id" hidden
               value={id}
               onChange={(event) =>
                {
                  setId(event.target.value);      
                }}
               
               />
                <label>employeeName</label>
                <input  type="text" class="form-control" id="employeeName"
                value={name}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>
              <div class="form-group">
                <label>employeeAddress</label>
                <input  type="text" class="form-control" id="employeeAddress" 
                 value={address}
                  onChange={(event) =>
                    {
                      setAddress(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Mobile</label>
                <input type="text" class="form-control" id="employeeMobile" 
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />
              </div>

                 <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>
              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>

<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Employee Id</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Employee Address</th>
      <th scope="col">Employee Mobile</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {users.map(function fn(item)
       {
            return(
            <tbody>
                <tr>
                <th scope="row">{item.id} </th>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.mobile}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editEmployee(item)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteEmployee(item.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
 
export default EmployeeLoad;