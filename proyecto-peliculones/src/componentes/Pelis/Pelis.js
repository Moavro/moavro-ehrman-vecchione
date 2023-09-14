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
        let contenido;
        if (contenido = this.props.descirpcion) {
            contenido = ""
            
        }else{
            contenido = this.props.descirpcion
        }

    }
    
    render(){
        // console.log(this.props.datosPeli)
        let contenido;



        return(
            <React.Fragment>
            <article className="peliculasjs">
                <h3 className='peliculasjs'>{this.props.datosPeli.title}</h3>
                <img className="pelis" src={`https://image.tmdb.org/t/p/w500${this.props.fotoPeli}`} />
                <button onClick={() => this.verDescripcion()}>Ver descripcion</button>
                <p>{contenido}</p>
                <Link to={`/detalle/${this.props.id}`}>Ver detalles</Link>
                
            </article>
            </React.Fragment>
        )
    }
}

export default Pelis