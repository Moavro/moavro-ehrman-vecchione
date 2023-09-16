import React, {Component} from "react";
import "./Detalle.css"



class DetallePeli extends Component{
    constructor(props){
        super(props);
        this.state = {
            peli:[],
            loading:true,
            textoBotonFavs: "Agregar a favoritos"
        }            
    }
    componentDidMount(){
        let id = this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US`)
        .then(response => response.json())
        .then(data => this.setState({peli: data, loading:false}))
        .catch(er => console.log(er))
            
        let favoritos=[]
        let pelisIncluidas = localStorage.getItem('pelisFavorito')
        console.log(localStorage.getItem('pelisFavorito'))
        if(pelisIncluidas !== null){
            favoritos=JSON.parse(pelisIncluidas)
            if (favoritos.includes(id)){
                this.setState({
                    textoBotonFavs:"Sacar de Favoritos"
                })
            }
        }
        }

        favoritos(id){
            let favoritos=[]
            let pelisIncluidas = localStorage.getItem('pelisFavorito')
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
            localStorage.setItem('pelisFavorito', favoritosEnString)
    
    
        }
    

    render(){
        console.log(this.state.peli);
        if (this.state.loading)
            return <p> Cargando..</p>;
        
            return(
            <React.Fragment>
                <h1 className="titulo_detalle"> {this.state.peli.title} </h1>
                <section className="detalles_section">
                    <div className="box_dp_1">
                        <article className="contenedor_imagen_pelis">
                            <img src={`https://image.tmdb.org/t/p/w500${this.state.peli.poster_path}`} alt={this.state.peli.name}/>
                        </article>
                        <div className="box_dp_2">
                            <article className="sinopsis_detalle_peli"> </article>
                            <h6>Sinopsis:{this.state.peli.overview}</h6>
                            <p class="texto_sinopsis"> </p>
                        </div>
                        <div className="box_dp_3">
                            <li className="list_box3_dp">
                            <h6 className="texto_duracion">Duracion:{this.state.peli.runtime}</h6>
                            </li>
                            <li className="list_box3_dp">
                            <h6 className="texto_estreno"> Fecha de estreno:{this.state.peli.release_date}</h6>
                            </li>
                            <li className="list_box3_dp">
                            <h6 className="texto_calificacion"> "Calificacion:{this.state.peli.vote_average}</h6>
                            </li>
                            <li className="list_box3_ds">
                            <h6>Genero: {this.state.peli.genres ? this.state.peli.genres.map((genre, idx) => <li className="texto_generos" key={genre + idx}>{genre.name}</li>) : "Sin géneros"}</h6>
                            </li>
                            <button onClick={() => this.favoritos(this.props.match.params.id)}>{this.state.textoBotonFavs}</button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    } 
}

export default DetallePeli
