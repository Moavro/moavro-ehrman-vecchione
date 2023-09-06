import React, {Component} from "react";
import Navbar from "../../componentes/Nabvar/Navbar"
import Footer from "../../componentes/Footer/Footer"

class Home extends Component{
    constructor(){
        super();
        this.state = {
            value:""
        }            
    }

    render(){

        return(
            <React.Fragment>
            <Footer></Footer>
            <p> aca la pagiina bro</p>
            <Navbar></Navbar>
            </React.Fragment>
        );
    } 
}

export default Home
