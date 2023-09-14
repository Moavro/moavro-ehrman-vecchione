import React from "react";
import { Switch, Route } from "react-router-dom";
import Busqueda from "./screens/Busqueda/Busqueda"
import Notfound from "./screens/Notfound/Notfound"
import Favoritos from "./screens/Favoritos/Favoritos"
import Navbar from "./componentes/Nabvar/Navbar";
import Footer from "./componentes/Footer/Footer";
import Home from "./screens/Home/Home"
import Pelis from "./screens/Vertodo/Pelis"
import Series from "./screens/Vertodo/Series"
import Detalle from "./screens/Detalle/Detalle";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}  /> 
        <Route path="/detalle/:id"component={Detalle}  />
        <Route path="/pelis"component={Pelis}  />
        <Route path="/series"component={Series}  />
        <Route path="/favoritos" component={Favoritos}  />
        <Route path="/busqueda" component={Busqueda}  />
        <Route path="" exact={true} component={Notfound}  />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
