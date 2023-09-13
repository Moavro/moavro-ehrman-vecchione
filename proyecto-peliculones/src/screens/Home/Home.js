import React, {Component} from "react";
import Pelis from "../../componentes/Pelis/Pelis";
import "./home.css"


class Home extends Component{
    constructor(){
        super();
        this.state = {
            value:[]
        }            
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US")
        .then( response => response.json())
        .then( data => this.setState({
            value: data.results,
            titulo: data.results.name,
            foto_peli: data.results.poster_path})
            
        
        )
        .catch( error => console.log(error))
    }

    render(){
        return(
            <React.Fragment>
                <div className="body_nofooter">
                    <h2 className="seccion_peliculas">Peliculas Populares</h2>
                    <section className="seccion_populares">
                        {this.state.value.map((pelicula, idx) => (
                            <Pelis
                            key = {pelicula.name + idx}
                            datosPeli = {pelicula}
                            fotoPeli = {pelicula.poster_path}
                            />
    
                        ))}
                    </section>
                    <h2 className="seccion_peliculas">Series populares</h2>
                    <section className="seccion_series">
                    </section>
                    <h2 className="seccion_peliculas">Para pochoclear 🍿</h2>
                    <section className="seccion_calificadas">
                    </section>
                </div>
                


                <p> aca la pagiina bro</p>
            </React.Fragment>
        );
    } 
}


export default Home
