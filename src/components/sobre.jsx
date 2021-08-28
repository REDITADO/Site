import { Component } from "react";
import '../App.css'
import HeaderComponent from "./HeaderComponent";
import { useHistory } from "react-router-dom";
export default class Sobre extends Component{
    render(){
        return(
            <div  className="container"> 
               <HeaderComponent func={()=>{window.location.href = "/"}}/>
            </div>
        )
    }
}
