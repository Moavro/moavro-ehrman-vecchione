import React, {Component} from "react";
import "./Series.css"
import {Link} from "react-router-dom/cjs/react-router-dom.min"


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
        //console.log(this.props.datosSerie)

        return(
            <React.Fragment>
            <article className="peliculasjs">
                <h3 className='peliculasjs'>{this.props.datosSerie.name}</h3>
                <img className="pelis" src={`https://image.tmdb.org/t/p/w500${this.props.fotoSeries}`} />
                <button>Ver descripcion</button>
                <Link to="/detalle/:id">Ver detalles</Link>
            </article>
            </React.Fragment>
        )
    }
}

export default Series