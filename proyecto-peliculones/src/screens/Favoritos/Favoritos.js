import React, {Component} from "react";



class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            value:""
        }            
    }

    render(){
        console.log(localStorage);
        
        return(
            <div>
                <h1>Aqui estan tus peliculas favoritas!</h1>
                <h1>Aqui estan tus series favoritas!</h1>
            </div>
        );
    } 
}

export default Favoritos
