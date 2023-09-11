import React, {Component} from "react";


class Home extends Component{
    constructor(){
        super();
        this.state = {
            value:""
        }            
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US")
        .then( response => response.json())
        .then( data => console.log(data)
        )
        .catch( error => console.log(error))
    }

    render(){
        return(
            <React.Fragment>
            <p> aca la pagiina bro</p>
            </React.Fragment>
        );
    } 
}

export default Home
