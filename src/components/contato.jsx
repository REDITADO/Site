import { Component } from "react";
import HeaderComponent from "./HeaderComponent";


export default class Contato extends Component{
render(){
    return(
        <div  className="container"> 
            <HeaderComponent func={()=>{window.location.href = "/"}}/>
        </div>
    )
}
}