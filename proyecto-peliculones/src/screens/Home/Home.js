import React, { Component } from "react";
import Pelis from "../../componentes/Pelis/Pelis";
import Series from "../../componentes/Series/Series"
import "./home.css"
import {Link} from "react-router-dom/cjs/react-router-dom.min"


class Home extends Component {
    constructor() {
        super();
        this.state = {
            value: [],
            valor: [],
            texto: "",
            loading: true
        }
    }

    apicallpelis(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // let pitu = this.state.value.slice(0,5)
                this.setState({
                    value: data.results,
                    titulo: data.results.name,
                    foto_peli: data.results.poster_path, 
                    loading: false    
                }
                
                )
            }
            )
            .catch(error => console.log(error))
    }

    apicallseries(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ 
                valor: data.results,
                tituloSeries: data.results.name,
                fotoSeries: data.results.poster_path,
                loading: false
            })
            ) 
            .catch(error => console.log(error))
    }
    componentDidMount() {
        this.apicallpelis("https://api.themoviedb.org/3/movie/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US")
        this.apicallseries("https://api.themoviedb.org/3/tv/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US")
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event){
        this.setState({texto: event.target.value})
    }

    render() {
        return (
            this.state.loading === true ? 
                <p> Cargando...</p>
             :            
            <React.Fragment>
                <form onSubmit={(event) => this.evitarSubmit(event)}>
                    <input type="text"  onChange={(event) => this.controlarCambios(event)} value={this.state.texto}  placeholder="Buscar"  />
                    <Link to={`busqueda/${this.state.texto}`}>
                        <button type="submit">Buscar</button> 
                    </Link>
                </form>


                <div className="body_nofooter">
                    <h2 className="seccion_peliculas">Peliculas Populares</h2>
                    <Link to="/pelis">Ver todas las Peliculas</Link>
                    <section className="seccion_populares">
                        {this.state.value.map((pelicula, idx) => {
                             if (idx < 5) {
                                return (<Pelis
                                key={pelicula.name + idx}
                                id={pelicula.id}
                                datosPeli={pelicula}
                                fotoPeli={pelicula.poster_path}
                                descripcion={pelicula.overview}
                            />)
                            } else {return (null)}
                        })}
                    </section>
                    <h2 className="seccion_peliculas">Series populares</h2>
                    <Link to="/series">Ver todas las series</Link>
                    <section className="seccion_series">
                    {this.state.valor.map((serie, idx) => {
                             if (idx < 5) {
                                return (<Series
                                key={serie.name + idx}
                                id={serie.id}
                                datosSerie={serie}
                                fotoSeries={serie.poster_path}
                                descripcion={serie.overview}
                            />)
                            } else {return (null)}
                        })}
                        
                       
                    </section>
                </div>
            </React.Fragment>
        );
    }
}


export default Home
