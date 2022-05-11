import { useParams} from "react-router";
import {useEffect,useState} from "react"

import axios from "axios";
import { Div } from "../../style";
export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const data = useParams()
  const[Data,SetData] = useState([])
  console.log('Data in page', Data);
  console.log('data', data);
  let ID = data.id.split("")[1]
  console.log('ID', ID);

  useEffect(()=>{
    axios.get(`http://localhost:8000/products?id=${ID}`).then((res)=>{
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
              <img className="image" src={ele.imageUrl} alt="#" />
              <div className="author">{ele.author}</div>
              <div className="description">{ele.description}</div>
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
