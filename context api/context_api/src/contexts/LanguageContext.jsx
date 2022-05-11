
import { createContext, useState } from "react";

export  const LangContext = createContext();

export const LangContextProvider = ({ childern }) => {

    const [lang, setLang] = useState("en");

    const handleChange = () =>{

        setLang(lang=="en" ? "hi":"en");
    };
 
return (

    <LangContext.Provider value={{ lang, handleChange }}>
             {childern}
    </LangContext.Provider>
);



}


