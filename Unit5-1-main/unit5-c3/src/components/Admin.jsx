import {useState} from 'react'
export const Admin = () => {
    const [employee, setEmployee]= useState({
        employee_name:"",
        employee_id:"",
        title:"intern",
        salary:0,
        image:"",
        username:"",
        password:"",
        tasks:"",
        status:"",
        team:""

    })
    const hanleChanges=(e)=>{
        const {name, value}= e.target;
        setEmployee({...employee, [name]:value})
    }

    const submitForm=(e)=>{
        e.preventDefault();
        fetch ("http://localhost:8080/employees",{
            method:"POST",
            body:JSON.stringify(employee),
            headers:{
                "Content-type":"application/json"
            }
        });
        alert("Employee Added")
    }
    return (
      <form onSubmit={submitForm} className="createEmployee" style={{width:"30%", display:"flex", flexDirection:"column", margin:"100px auto"}}>
        <input onChange={hanleChanges} type="text" placeholder="Employee Name" name="employee_name" />
        <input onChange={hanleChanges} type="text" placeholder="Employee id" name="employee_id" />
        <select onChange={hanleChanges} name="title">
          <option value="intern">Intern</option>
          <option value="Jr Software Developer">Jr Software Developer</option>
          <option value="Sr Software Developer">Sr Software Developer</option>
          <option value="Team Lead">Team Lead</option>
        </select>
        <input onChange={hanleChanges} type="number" placeholder="Salary" name="salary" />
        <input onChange={hanleChanges} type="text" placeholder="Image" name="image" />
        <input onChange={hanleChanges} type="text" placeholder="User Name" name="username" />
        <input onChange={hanleChanges} type="password" placeholder="Password" name="password" />
        <input
            onChange={hanleChanges}
          type="text"
          placeholder="Enter tasks separated by commas"
          name="tasks"
        />
        <select onChange={hanleChanges} name="status" id="status">
          <option value="">Select Status</option>
          <option value="terminated">Terminated</option>
          <option value="working">Working</option>
        </select>
        <select onChange={hanleChanges} name="team" id="team">
          <option value="">Select team</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="qa">QA</option>
        </select>
        <input style={{background:"greenyellow", color:"black", border:"none", padding:"10px"}} className="createUser" type="submit" value={"submit"} />
      </form>
    );
  };