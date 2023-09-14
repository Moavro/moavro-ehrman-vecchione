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
            valor: []
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
                fotoSeries: data.results.poster_path
            })

            ) 
            .catch(error => console.log(error))
    }
    componentDidMount() {
        this.apicallpelis("https://api.themoviedb.org/3/movie/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US")
        this.apicallseries("https://api.themoviedb.org/3/tv/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US")
    }

    render() {
        return (
            <React.Fragment>
                <form className= "buscador" action="./buscador.html" method="get">
                    <input className ="barra_buscadora" type="text" placeholder="Buscador" name="buscador" value=""></input>
                </form>
                <div className="body_nofooter">
                    <h2 className="seccion_peliculas">Peliculas Populares</h2>
                    <Link to="/pelis">Ver todas las Peliculas</Link>
                    <section className="seccion_populares">
                        {this.state.value.map((pelicula, idx) => (
                            <Pelis
                                key={pelicula.name + idx}
                                id={idx}
                                datosPeli={pelicula}
                                fotoPeli={pelicula.poster_path}
                                descripcion={pelicula.overview}
                            />

                        ))}
                    </section>
                    <h2 className="seccion_peliculas">Series populares</h2>
                    <Link to="/series">Ver todas las series</Link>
                    <section className="seccion_series">
                        {this.state.valor.map((serie, idx) => (
                            <Series
                                key={serie.name + idx}
                                datosSerie={serie}
                                fotoSeries={serie.poster_path}
                            />

                        ))}
                    </section>
                </div>
            </React.Fragment>
        );
    }
}


export default Home
