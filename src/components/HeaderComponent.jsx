import { Component, createContext} from "react";
import '../App.css'
export default class HeaderComponent extends Component{
    constructor(props){
        super(props)
        console.log(props.func)
 }
    render(){
        return(
    <div>
    <header className="menu">
        <svg class="MuiSvgIcon-root jss2" focusable="false" viewBox="0 0 24 24" aria-hidden="true" onClick={this.props.func}><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
        <h5>Portifólio</h5>
    </header>
    </div>
    )
    }
}
{/* <header className="menu">
      <svg class="MuiSvgIcon-root jss2" focusable="false" viewBox="0 0 24 24" aria-hidden="true" onClick={this.aside}><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
        <h5>Portifólio</h5>
      </header> */}