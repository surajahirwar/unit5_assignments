import { useEffect, useState } from "react"

 function Counter(){
    const [counter, setCounter]=useState(0);
   
    useEffect(()=>{
        let id=setInterval(()=>{
            setCounter((prevVal)=>{
                if(prevVal>=9)
                {
                    clearInterval(id);
                }
                console.log("setting", prevVal)
                return (prevVal+(1))
            })
        },1000)

        return ()=>{
            clearInterval(id)
        }

    },[])

     return(
         <div>
             <h1>Counter:{counter}</h1>
         </div>
         
     )
 }
 export default Counter