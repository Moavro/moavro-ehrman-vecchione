import React, {Component} from "react";
import Pelis from "../../componentes/Pelis/Pelis";
import Series from "../../componentes/Series/Series";



class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            // value:[],
            // valor:[],
            favsPelis: [],
            favsSeries: []
        }            
    }

    // apicallpelis(url) {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 value: data.results,
    //                 titulo: data.results.name,
    //                 foto_peli: data.results.poster_path,
                    
                    
    //             })
    //         })
    //         .catch(error => console.log(error))
    // }

    // apicallseries(url) {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => this.setState({ 
    //             valor: data.results,
    //             tituloSeries: data.results.name,
    //             fotoSeries: data.results.poster_path
    //         })) 
    //         .catch(error => console.log(error))
    // }

    componentDidMount() {
        let recuperofavs = localStorage.getItem("pelisFavorito")
        if (recuperofavs != null){
            let idPelisfavs = JSON.parse(recuperofavs)
            let listaPelisFavs = []
            idPelisfavs.map((id)=>(
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US`)
                .then(response => response.json())
                .then(data => {
                    listaPelisFavs.push(data);
                    this.setState({
                        favsPelis: listaPelisFavs
                    })
                })
                ))
        }

        let seriesFavLocal = localStorage.getItem("seriesFavorito")
        if (seriesFavLocal != null){
            let idsSeriesFav = JSON.parse(seriesFavLocal)
            let listaSeriesFav = []
            idsSeriesFav.map((id)=>(
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US`)
                .then(response => response.json())
                .then(data => {
                    listaSeriesFav.push(data);
                    this.setState({
                        favsSeries: listaSeriesFav
                    })
                })
            ))
        }


        // this.apicallpelis("https://api.themoviedb.org/3/movie/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US")
        // this.apicallseries("https://api.themoviedb.org/3/tv/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US")
    }
    



    render(){

        return(
            <React.Fragment><div>
            <h1>Aqui estan tus peliculas y series favoritas!</h1>
            <section className="seccion_populares">
                {
                this.state.favsPelis.map((pelicula, idx) => {
                    return(
                        <Pelis key={idx}
                        id={pelicula.id}
                        datosPeli={pelicula}
                        fotoPeli={pelicula.poster_path}
                        descripcion={pelicula.overview}/>
                    )
            })
                }
            </section>
            <section className="seccion_populares">
                {this.state.favsSeries.map((serie, idx) =>
                <Series key={idx}
                id={serie.id}
                datosSerie={serie}
                fotoSeries={serie.poster_path}
                descripcion={serie.overview}/>)}
            </section>
        </div></React.Fragment>
            
        );
    } 
}

export default Favoritos
