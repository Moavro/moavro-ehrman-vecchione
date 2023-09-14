import React, {Component} from "react";




class DetalleSerie extends Component{
    constructor(props){
        super(props);
        this.state = {
            serie:[],
            loading:true
        }            
    }
    componentDidMount(){
        let id = this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US`)
        .then(response => response.json())
        .then(data => this.setState({serie: data, loading:false}))
        .catch(er => console.log(er))
            
        };

    render(){
        console.log(this.state.serie);
        if (this.state.loading)
            return <p> Cargando..</p>;
        
            return(
            <React.Fragment>
                <h1 className="titulo_detalle"> {this.state.serie.name} </h1>
                <section className="detalles_section">
                    <div className="box_dp_1">
                        <article className="contenedor_imagen_pelis">
                            <img src={`https://image.tmdb.org/t/p/w500${this.state.serie.poster_path}`} alt={this.state.serie.title}/>
                        </article>
                        <div className="box_dp_2">
                            <article className="sinopsis_detalle_peli"> </article>
                            <h6>Sinopsis:{this.state.serie.overview ? this.state.serie.overview : "No hay informacion" }</h6>
                            <p class="texto_sinopsis"> </p>
                            <button type="button" className="boton_recomendaciones">Ver recomendaciones</button>
                            <section className = 'recomendaciones'>
                            </section>
                        </div>
                        <div className="box_dp_3">
                            <li className="list_box3_dp">
                            <h6 className="texto_duracion">Tipo:{this.state.serie.type}</h6>
                            </li>
                            <li className="list_box3_dp">
                            <h6 className="texto_estreno"> Fecha de estreno:{this.state.serie.first_air_date}</h6>
                            </li>
                            <li className="list_box3_dp">
                            <h6 className="texto_calificacion"> "Calificacion:{this.state.serie.vote_average}</h6>
                            </li>
                            <li className="list_box3_ds">
                            <h6>Genero: {this.state.serie.genres ? this.state.serie.genres.map((genre, idx) => <li className="texto_generos" key={genre + idx}>{genre.name}</li>) : "Sin géneros"}</h6>
                            </li>
                            <button type="button" className="boton_recomendaciones" >Añadir a favoritos</button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    } 
}

export default DetalleSerie
