import React, {Component} from "react";
import Pelis from "../../componentes/Pelis/Pelis";


class TodoPelis extends Component{
    constructor(){
        super();
        this.state = {
            peli:[],
            page:"",
        }            
    }

    componentDidMount(){

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => this.setState({peli: data.results, page: data.page + 1, loading:false}))
        .catch(er => console.log(er))
            
        };
    render(){
        console.log(this.state.peli)
        return(
                <React.Fragment>
                    {/* <h1 className="seccion_peliculas"> Peliculas</h1> */}
                    <section className="seccion_populares">
                        {this.state.peli.map((pelicula, idx) => {
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
                </React.Fragment>
            
        );
    } 
}

export default TodoPelis
