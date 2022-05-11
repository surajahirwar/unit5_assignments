import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Div } from "../StyleComponents/Style";

import axios from "axios";




export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  const data = useParams();
  // console.log("data:",data)

  const [Data, SetData] = useState([])

  let ID = data.id.split("")[1]

  useEffect(()=>{
    axios.get(`https://lystclone.herokuapp.com/data?id=${ID}`).then((res)=>{
      console.log('res', res.data);
      SetData(res.data)
      
    })
  },[])



  return (
    <>
      <Div className="bookContainer">
        {
          Data.map((ele)=>{
            return <>
              <h2 className="title">{ele.title}</h2>
              <img className="image" src={ele.Image} alt="#" />
              <div className="author">{ele.author}</div>
              <div className="description">{ele.details}</div>
              <div className="price">{ele.price}</div>
              <div className="section">{ele.section}</div>
              <div className="isbnNumber">{ele.isbnNumber}</div>
              <ul className="reviews">
                {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
                <li>{ele.reviews}</li>
              </ul>
            </>
          })
        }
      </Div>
    </>
  );
};


// Image: { type: String, required: false },
// title: { type: String, required: false },
// details: { type: Number, required: false },
// price: { type: Number, required: false },
// offPrice: { type: Number, required: false },
// off: { type: String, required: false },
// gender: { type: String, required: false },