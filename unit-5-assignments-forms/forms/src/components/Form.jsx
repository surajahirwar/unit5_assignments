import { useState, useEffect } from "react"
import "./Form.css"



function Form(){
    
        const [formData,setFormData]=useState({
            Name:"",
            age:"",
            address:"",
            department:"",
            salary:"",
            maritalStatus:""
        })
       
       const [todo,setTodo]=useState([])

    const handleChange=(e)=>{
       
        // console.log(e.target.value)
        setFormData({
            ...formData,[e.target.id]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(formData)
        fetch("http://localhost:8080/users",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formData)
        }).then(()=>{
            getData()
        })
          
        

    }
     
    useEffect(()=>{
        getData()

    },[])

    async function getData(){
        let data=await fetch("http://localhost:8080/users")
        data=await data.json()
        setTodo(data)
    }
      
   return <div> <form onSubmit={handleSubmit}>
        <input  value={formData.Name} onChange={handleChange} type="text" placeholder="enter name" id="Name"/><br />
        <input value={formData.age} onChange={handleChange}  type="number" placeholder="enter age" id="age"/><br />
        <input onChange={handleChange} value={formData.address} type="text" placeholder="enter address" id="address"/><br />
        <select onChange={handleChange} id="department">
        <option  >departments</option>
            <option  value="IT">IT</option>
            <option  value="Electrical">Electrical</option>
            <option  value="Mechanical">Mechanical</option>
        </select><br />
        <input onChange={handleChange} value={formData.salary} type="text" placeholder="enter salary" id="salary"/><br />
        <input onChange={handleChange} type="checkbox" id="maritalStatus" name="marital-status" value="Married" />
        <label htmlFor="married">Married</label>
        <br />
        <input onChange={handleChange} type="checkbox" id="maritalStatus" name="marital-status" value="Unmarried" />
        <label htmlFor="unmarried">Unmarried</label><br />
        
        <input type="submit" value="submit"  />
    </form>

    {todo.length==0?null:<table >
        <thead >
            <tr >
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital-status</th>
            </tr>
        </thead>
        <tbody>
          {todo.map((e)=>{
               
                 return <tr>
                      <td>{e.id}</td>
                      <td>{e.Name}</td>
                      <td>{e.age}</td>
                      <td>{e.address}</td>
                      <td>{e.department}</td>
                      <td>{e.salary}</td>
                      <td>{e.maritalStatus}</td>
                  </tr>
              
          })}
        </tbody>
    </table>
}
    </div>
}

export default Form