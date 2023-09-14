import React, {Component} from "react";
import "./pelis.css"
import {Link} from "react-router-dom/cjs/react-router-dom.min"


class Pelis extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            descripcion: ""
        }
    }
    componentDidMount(){
    }
    verDescripcion(){
        this.state.descripcion = this.props.descripcion[this.props.id]

    }

    
    render(){
        // console.log(this.props.datosPeli)
        console.log(this.state.descripcion);


        return(
            <React.Fragment>
            <article className="peliculasjs">
                <h3 className='peliculasjs'>{this.props.datosPeli.title}</h3>
                <img className="pelis" src={`https://image.tmdb.org/t/p/w500${this.props.fotoPeli}`} />
                <button onClick={() => this.verDescripcion()}>Ver descripcion {this.state.descripcion}</button>
                <Link to={`/detalle/${this.props.id}`}>Ver detalles</Link>
                
            </article>
            </React.Fragment>
        )
    }
}

export default Pelis