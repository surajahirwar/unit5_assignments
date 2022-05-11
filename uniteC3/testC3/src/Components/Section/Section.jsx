import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Div, Div2 } from "../StyleComponents/Style";
// import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
// import styled from "styled-components";
// import axios from "axios";
// import { useParams} from "react-router";
// import {useEffect,useState} from "react"




export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  const data = useParams()
  const[Data,SetData] = useState([])

  let ID = data.section.split(":")[1]
  console.log('ID', ID);
  


  useEffect(()=>{
    Get()
    
  },[ID])

  useEffect(()=>{

  },[Data])

  const Get=()=>{
    axios.get(`http://localhost:8000/products?section=${ID}`).then((res)=>{
      // console.log('res', res.data);
      SetData(res.data)
    })
  }
  
  const sorting = (e)=>{
    if( e.target.className==="sortByPriceAsc"){
      
      console.log('Data', Data);
      SetData([...Data.sort((a, b) => a.price-b.price)])
    }
    if( e.target.className==="sortByPriceDesc"){  
      console.log('Data', Data);
      SetData([...Data.sort((a, b) => b.price-a.price)])
    }
    if( e.target.className==="sortByTitleAsc"){
      SetData([...Data.sort((a, b) =>a.title.localeCompare(b.title))])
    }
    if( e.target.className==="sortByTitleDesc"){
      SetData([...Data.sort((a, b) =>b.title.localeCompare(a.title))])
    }


  }


  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
          ID
        }
      </h2>

      <SortAndFilterButtons handleSort={sorting} />

      <Div2 className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        {Data.map((ele)=>{
          return <Div>
          <Link to={`/bookdetailspage/:${ele.id}`}>
          
            <img src={ele.imageUrl} alt="image" />
            
            <h2>{ele.title}</h2>
            <p>{ele.price}</p>
          
          </Link>
        </Div>
        })}
      </Div2>
    </>
  );
};
