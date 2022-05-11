import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export const Card = () =>{
    const { handleChange } = useContext(CartContext);

    return (            

        <div style={{
                width:"300px",
                height:"300px",
                padding:"10px",
                background:"teal",
            
        }}>
            

            <button onClick={() =>{

                handleChange(1)
            }}> 
            Add to Cart</button>

        </div>
    );
};