import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
// import { LangContext } from "../contexts/LanguageContext";

export const Navbar = () =>{
    const {cart} = useContext(CartContext);

    // const lang = useContext(LangContext);

    return (
        <nav style={{

            display:"flex",
            justifyContent:"end",
            padding:"15px",
            fontSize:"25px",
            border: "2px solid red", 
            margin:"10px",

        }}>
{/* 
            {lang=== "en" ? "Cart": "Thaila"} : {cart} */}

            Cart:{cart}
            </nav>  
    );

}