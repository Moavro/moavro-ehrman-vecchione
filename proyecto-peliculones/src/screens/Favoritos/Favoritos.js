import React, {Component} from "react";



class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            value:[],
            valor:[]
        }            
    }

    apicallpelis(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    value: data.results,
                    titulo: data.results.name,
                    foto_peli: data.results.poster_path,
                    
                    
                })
            })
            .catch(error => console.log(error))
    }

    apicallseries(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ 
                valor: data.results,
                tituloSeries: data.results.name,
                fotoSeries: data.results.poster_path
            })) 
            .catch(error => console.log(error))
    }
    componentDidMount() {
        let recuperofavs = localStorage.getItem("favoritos")
        let idPelisfavs = JSON.parse(recuperofavs)
        console.log(idPelisfavs)


        this.apicallpelis("https://api.themoviedb.org/3/movie/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US")
        this.apicallseries("https://api.themoviedb.org/3/tv/popular?api_key=57d7f4097b2e7b7015db489746e7c24c&language=en-US")
    }



    render(){



        return(
            <div>
                <h1>Aqui estan tus peliculas y series favoritas!</h1>



            </div>
        );
    } 
}

export default Favoritos
