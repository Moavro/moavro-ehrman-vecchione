import React, {Component} from "react";
import "./Series.css"
import {Link} from "react-router-dom/cjs/react-router-dom.min"


class Series extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            descripcion: "Ver mas"
            
        }
    }


    
    componentDidMount(){
    }
    verDescripcion(){
        if(this.state.descripcion == 'Ver mas'){
            this.setState({
                descripcion: 'Ocultar descripcion',
            })
        } else{
            this.setState({
                descripcion: 'Ver mas',

            })
        }
    }
    
    render(){
        //console.log(this.props.datosSerie)

        return(
            <React.Fragment>
            <article className="peliculasjs">
                <h3 className='peliculasjs'>{this.props.datosSerie.name}</h3>
                <img className="pelis" src={`https://image.tmdb.org/t/p/w500${this.props.fotoSeries}`} />
                <button>Agregar a favoritos</button>
                <button onClick={() => this.verDescripcion()}>Ver descripcion</button>
                {this.state.descripcion === "Ocultar descripcion" ? <p>{this.props.descripcion}</p> : false}
                <Link to={`/detalle/${this.props.id}`}>Ver detalles</Link>
            </article>
            </React.Fragment>
        )
    }
}

export default Series