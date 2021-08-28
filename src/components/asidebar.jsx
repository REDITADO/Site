import { Component } from "react";
import React from 'react';
import './asideBar.css'

export default class AsideBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            //style={this.props}
            <div className="containerAside" style={{display:this.props.displayMode}}>
                <aside className="asideBar">
                    <div className="selectRoute">
                    <a href="/sobre"><img src="#" alt="" />Sobre</a>
                    <a href="/contato"><img src="#" alt="" />Contato</a>
                    </div>
                    <footer className="socialFooter">
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=62985570505&text=Ola vim pelo portifólio" className="socialButton"><img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/WhatsApp-Android-PNG.png" alt="" /></a>
                        <a target="_blank" href="https://github.com/REDITADO" className="socialButton"><img src="https://pic.onlinewebfonts.com/svg/img_44605.png" alt="" /></a>
                        <a target="_blank" href="https://www.instagram.com/josecarloscardosobrito/" className="socialButton"><img src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente13.png?fit=2400,2400&ssl=1" alt="" /></a>
                    </footer>
                </aside>
            </div>
        );
    }
}