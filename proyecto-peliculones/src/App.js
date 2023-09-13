import React from "react";
import { Switch, Route } from "react-router-dom";
import Busqueda from "./screens/Busqueda/Busqueda"
import Detalle from "./screens/Detalle/Detalle"
import Notfound from "./screens/Notfound/Notfound"
import Favoritos from "./screens/Favoritos/Favoritos"
import Navbar from "./componentes/Nabvar/Navbar";
import Footer from "./componentes/Footer/Footer";
import Home from "./screens/Home/Home"


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}  /> 
        <Route path="/detalle/:id"component={Detalle}  />
        <Route path="" component={Notfound}  />
        <Route path="/favoritos" component={Favoritos}  />
        <Route path="/busqueda" component={Busqueda}  />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
