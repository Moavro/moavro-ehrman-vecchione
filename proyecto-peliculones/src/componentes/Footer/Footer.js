import React from "react";

function Footer(){
    return(
            <footer className = "footer">
                <div className = "texto_footer">
                    <nav>
                        <ul>
                            <li className = "lista_footer"><a href="#" className = "items_footer">Términos y condiciones.</a></li>
                            <li className = "lista_footer"><a href="#" className = "items_footer">Información legal.</a></li>
                            <li>Todos los derechos reservados.</li>
                        </ul>
                    </nav>
                </div>
                <div className="logo_footer">
                    <img  src="img/logo_peliculones.png" alt="logo" className="logo"></img>
                    <h1 className="tituloprincipal">PELICULONES</h1>
                    <img src ='img/tmdb.png' alt = 'logo tmdb' className="logotmdb"></img>
                </div>
                <div className = "integrantes"> 
                    <section className = "items_integrantes">
                        <article className = "lista_footer"><u>Developers</u></article>
                        <article className = "lista_footer">Tomás Moavro</article>
                        <article className = "lista_footer">Nicolás Ehrman</article>
                        <article className = "lista_footer">Nicolas Vecchione</article>
                    </section>
                </div>
            </footer>
    )
}

export default Footer