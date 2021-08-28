import './App.css';
import './components/asideBar.css'
import {Component} from "react"
import AsideBar from './components/asidebar';
import HeaderComponent from './components/HeaderComponent.jsx'
function escrever(str){
  const char = str.split('').reverse()
  let typer = setInterval(()=>{
    if (!char.length){ return clearInterval(typer);}
  
    let next = char.pop();
  document.querySelector("span").innerText+=next
  },100)
  }



class App extends Component {
  constructor(){
    super()
    this.state ={
      mode:"dark",
      className:"content",
      colorButton:"controlLightButton",
      asideMode:"none",
    }
    window.onload=()=>{
      escrever("Programador");
    
    }
    this.darkMode = this.darkMode.bind(this);
    this.aside = this.aside.bind(this);
  }
    darkMode(){
      // document.querySelector(".content").classList.toggle("dark");
    if(this.state.mode ==="dark"){
      this.setState({mode:"light"})
      this.setState({className:"content dark"})
      this.setState({colorButton:"controlLightButton colorControl"})
    }else{
      this.setState({mode:"dark"})
      this.setState({className:"content"})
      this.setState({colorButton:"controlLightButton"})
    }
    
    }
    aside(){
      if(this.state.asideMode==="block"){
        this.setState({asideMode:"none"})
        document.querySelector(".controlLightButton").disabled = ''
        document.querySelector(".controlLightButton").style.cursor = "pointer"
      }else{
        this.setState({asideMode:"block"})
        document.querySelector(".controlLightButton").disabled = 'disabled'
        document.querySelector(".controlLightButton").style.cursor = "not-allowed"
      }
    }
  render(){
  return (
    <div className="container">
      <HeaderComponent func={this.aside}/>
    <section  className={this.state.className}>

    <AsideBar displayMode={this.state.asideMode}  className="Bar"/>

    <div className="informations">
    <img src="./programmer.svg" className="logo-svg"></img>
    <h1>José Carlos </h1>
    <span></span>
    
    <button className={this.state.colorButton} onClick={this.darkMode}><img />{this.state.mode}</button>
    </div>
    </section>
    </div>
  );
  }
}

export default App;
