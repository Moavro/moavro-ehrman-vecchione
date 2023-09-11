import React, {Component} from "react";

class Pelis extends Component{
    constructor(){
        super();
        this.state = {
            value: ""
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US")
        .then( response => response.json())
        .then( data => console.log(data)
        )
        .catch( error => console.log(error))
    }
    
    render(){

        return(
            <div>
                {console.log(this.state.value)}
            </div>
        )
    }
}

export default Pelis