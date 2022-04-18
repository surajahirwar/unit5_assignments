
import { useEffect, useState } from "react";
import  './ShowStudents.css'

export const ShowStudents = () => {

  const [Showdata, setShowdata] = useState([]);
  useEffect(()=>{
      getData();

  })

  const getData =  async() =>{

    const data = await fetch(
                    `http://localhost:8000/students`).then((d)=> 
    d.json()
    );

setShowdata(data)


  }
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>


      <table border="1"  className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          
          {/* populate all rows like below: */}
           {Showdata.map((t)=>(
          <tr className="row">
         
            <td className="first_name">{t.first_name}</td>
            <td className="last_name">{t.last_name}</td>
            <td className="email">{t.email}</td>
            <td className="gender">{t.gender}</td>
            <td className="age">{t.age}</td>
            <td className="tenth_score">{t.tenth_score}</td>
            <td className="twelth_score">{t.twelth_score}</td>
            <td className="preferred_branch">{t.preferred_branch}</td>
          </tr>
            ))}
        </tbody>
      </table>
     
            
          
    </div>



  );
};
