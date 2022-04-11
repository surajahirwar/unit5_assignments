import img from "./notes.png"
import "./index.css"

var main = document.querySelector("#input")
 main.addEventListener("input",()=>{
    let data = main.value || null
    if(data!=null){
    document.getElementById("output").innerHTML=data
    document.getElementById("output").style.visibility="visible"
    }
})
document.getElementById("logo").src=img
    
