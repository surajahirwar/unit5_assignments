
import "./Addstudent.css"

import { useEffect, useState } from "react";

export const AddStudent = () => {

  const [text, setText] = useState("");


  const [formData, setFormData] = useState({

    first_name:"",
    last_name:"",
    email:"",
    gender:"",
    age:"",
    tenth_score:"",
    twelth_score:"",
    preferred_branch:"",
});


const handleChange=(e)=>{
       
  // console.log(e.target.value)
  setFormData({
      ...formData,[e.target.id]:e.target.value
  })
}

  const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(formData)
        fetch("http://localhost:8000/students",{
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
      let data=await fetch("http://localhost:8000/students")
      data=await data.json()
      setText(data)
  }
    

  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div>
        Firstname:{" "}
        <input  onChange={handleChange}   value={formData.first_name}
          type="text"
          id="first_name"
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input  onChange={handleChange} value={formData.last_name}
          type="text"
          id="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input  onChange={handleChange} value={formData.email}
          type="email"
          id="email"
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input  onChange={handleChange} value={formData.gender}
            id="gender"
            className="male"
            type="radio"
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input  onChange={handleChange} value={formData.age}
          type="number"
          id="age"
          className="age"
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input  onChange={handleChange} value={formData.tenth_score}
          type="number"
          id="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input  onChange={handleChange} value={formData.twelth_score}
          type="number"
          id="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select   onChange={handleChange} value={formData.preferred_branch}
        
          id="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
