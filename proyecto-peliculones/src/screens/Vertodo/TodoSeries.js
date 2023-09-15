import React, {Component} from "react";
import Series from "../../componentes/Series/Series";


class TodoSeries extends Component{
    constructor(){
        super();
        this.state = {
            serie:[],
            page:"",
            loading: true
        }            
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => this.setState({serie: data.results, page: data.page + 1, loading:false}))
        .catch(er => console.log(er))
            
        };

        verMasSeries(){
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => this.setState({serie: data.results, page: data.page + 1, loading:false}))
        .catch(er => console.log(er))
        }
        render() {
            console.log(this.state.serie);
            return (
                this.state.loading === true ? (
                    <p> Cargando...</p>
                ) : (
                    <React.Fragment>
                         <h1 className="seccion_peliculas"> Series</h1> 
                        <section className="seccion_populares">
                            <button onClick={() => this.verMasSeries()}> Ver mas </button>
                            {this.state.serie.map((s, idx) => (
                                <Series
                                    key={s.name + idx}
                                    id={s.id}
                                    datosSerie={s}
                                    fotoSeries={s.poster_path}
                                    descripcion={s.overview}
                                />
                            ))}
                        </section>
                    </React.Fragment>
                )
            );
        }
        
}


export default TodoSeries
