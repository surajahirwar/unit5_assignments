import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios from "axios";
import {useEffect,useState} from 'react';
import { Div, Div2, Main } from "../../style";
export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  // const Main = styled.div`
  //   /* Apply some responsive styling to children */

  // `;
  const[Data,SetData] = useState([])
 
  useEffect(()=>{
    axios.get(`http://localhost:8000/products`).then((res)=>{
      console.log('res', res.data);
      SetData(res.data)
      
    })
  },[])
  
  console.log('data', Data);

  const sorting = (e)=>{
    if( e.target.className==="sortByPriceAsc"){
      
      SetData([...Data.sort((a, b) => a.price-b.price)])
      console.log('Data', Data);
    }
    if( e.target.className==="sortByPriceDesc"){
    
      SetData([...Data.sort((a, b) => b.price-a.price)])
      console.log('Data', Data);
    }
    if( e.target.className==="sortByTitleAsc"){
      SetData([...Data.sort((a, b) =>a.title.localeCompare(b.title))])
    }
    if( e.target.className==="sortByTitleDesc"){
      SetData([...Data.sort((a, b) =>b.title.localeCompare(a.title))])
    }
  

  }

  return (
    <div className="homeContainer">
      <h2 style={{
         textAlign: "center" 
          
          }}>Home</h2>
          
      <SortAndFilterButtons handleSort={sorting}/>

      <Div2 className="mainContainer">
        {
          Data.map((ele)=>{ 
            // console.log('ele', ele);
            return <BookCard key={ele.id} id={ele.id} imageUrl={ele.imageUrl} title={ele.title} price={ele.price}/>
          })
        }
      </Div2>
    </div>
  );
};
