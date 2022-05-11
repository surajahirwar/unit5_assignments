import {sum} from "./calc";
import './index.css'

console.log(sum(9,9));

const root= document.querySelector("#root");



document.querySelector(".submit").addEventListener("click", appendData);

function appendData(){
    document.querySelector("#right").innerHTML=""

    const todo= document.querySelector(".todo").value;

    let head= document.createElement("h1");
    head.textContent=`${todo}`;

    document.querySelector("#right").append(todo);
}

import img from './Todo-Logo.png'
const logo= document.querySelector("#logo");

const image= document.createElement("img");
image.setAttribute("src", img)
image.setAttribute("class", "imglogo")

logo.append(image)