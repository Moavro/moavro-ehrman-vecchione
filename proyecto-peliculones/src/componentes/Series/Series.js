import React, {Component} from "react";
import "./Series.css"
import {Link} from "react-router-dom/cjs/react-router-dom.min"


class Series extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            descripcion: "Ver mas",
            textoBotonFavs: "Agregar a favoritos"
            
        }
    }


    
    componentDidMount(){
        let traigoPeli = localStorage.getItem('favoritos')
        if (traigoPeli !== null){
            let favoritos = JSON.parse(traigoPeli)

            if (favoritos.includes(this.props.id)){
                this.setState({
                    textoBotonFavs: 'Sacar de Favoritos'
                })
            }
        }
    }
    verDescripcion(){
        if(this.state.descripcion === 'Ver mas'){
            this.setState({
                descripcion: 'Ocultar descripcion',
            })
        } else{
            this.setState({
                descripcion: 'Ver mas',

            })
        }
    }
    favoritos(id){
        let favoritos=[]
        let pelisIncluidas = localStorage.getItem('favoritos')
        if(pelisIncluidas !== null){
            favoritos=JSON.parse(pelisIncluidas)
        }
        if (favoritos.includes(id)){
            favoritos = favoritos.filter(id2 => id2 !== id)
            this.setState({
                textoBotonFavs:"Agregar a Favoritos"
            })
        } else{
            favoritos.push(id)
            this.setState({
                textoBotonFavs:"Sacar de favoritos"
            })
        }
        let favoritosEnString=JSON.stringify(favoritos)
        localStorage.setItem('favoritos', favoritosEnString)


    }
    
    render(){
        //console.log(this.props.datosSerie)

        return(
            <React.Fragment>
            <article className="peliculasjs">
                <h3 className='peliculasjs'>{this.props.datosSerie.name}</h3>
                <img className="pelis" src={`https://image.tmdb.org/t/p/w500${this.props.fotoSeries}`} alt= "foto de serie"/>
                <button onClick={() => this.favoritos(this.props.id)}>{this.state.textoBotonFavs}</button>
                <button onClick={() => this.verDescripcion()}>Ver descripcion</button>
                {this.state.descripcion === "Ocultar descripcion" ? <p>{this.props.descripcion}</p> : false}
                <Link to={`/detalleSerie/id/${this.props.id}`}>Ver detalles</Link>
            </article>
            </React.Fragment>
        )
    }
}

export default Series