import React, {Component} from "react";
import "./Series.css"


class Series extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }
    componentDidMount(){
    }
    
    render(){
        console.log(this.props.datosPeli)

        return(
            <React.Fragment>
            <article className="peliculasjs">
                <h3 className='peliculasjs'>{this.props.datosPeli.title}</h3>
                <img className="pelis" src={`https://image.tmdb.org/t/p/w500${this.props.fotoPeli}`} />
            </article>
            </React.Fragment>
        )
    }
}

export default Series