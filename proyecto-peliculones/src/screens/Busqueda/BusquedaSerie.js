import React, {Component} from "react";
import Series from "../../componentes/Series/Series";
import "./Busqueda.css"

class BusquedaSerie extends Component{
    constructor(props){
        super(props);
        this.state = {
            busqueda:[],
            loading: true
        }            
    }

    componentDidMount(){
        let texto = this.props.match.params.texto

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US&query=${texto}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => this.setState({busqueda: data.results, loading: false}))
        .catch(er => console.log(er))
            
        };

        render() {
            console.log(this.state.busqueda)
            return (
                this.state.loading === true ? (
                    <p> Cargando...</p>
                ) : (
                    <React.Fragment>
                    <div className="body_nofooter">
                    <h2 class="seccion_buscador">Resultados de búsqueda para:{this.state.texto}  </h2>
                    <section className="seccion_populares">
                        {this.state.busqueda.length === 0? (
                            <p> No se encontraron resultados</p>
                        ) : (
                        
                        this.state.busqueda.map((serie, idx) => (
                             (<Series
                                key={serie.name + idx}
                                id={serie.id}
                                datosPeli={serie}
                                fotoPeli={serie.poster_path}
                                descripcion={serie.overview}
                            />)
                        ))
                        )}
                        </section>
                    </div>
                    </React.Fragment>
                )
            );
        }
        
}

export default BusquedaSerie

