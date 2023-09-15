import React from "react";
import { Switch, Route } from "react-router-dom";
import Busqueda from "./screens/Busqueda/Busqueda"
import Notfound from "./screens/Notfound/Notfound"
import Favoritos from "./screens/Favoritos/Favoritos"
import Navbar from "./componentes/Nabvar/Navbar";
import Footer from "./componentes/Footer/Footer";
import Home from "./screens/Home/Home"
import TodoPelis from "./screens/Vertodo/TodoPelis"
import TodoSeries from "./screens/Vertodo/TodoSeries"
import DetallePeli from "./screens/Detalle/DetallePeli";
import DetalleSerie from "./screens/Detalle/DetalleSerie";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}  /> 
        <Route path="/detallePeli/id/:id"component={DetallePeli}  />
        <Route path="/detalleSerie/id/:id"component={DetalleSerie}  />
        <Route path="/pelis"component={TodoPelis}  />
        <Route path="/series"component={TodoSeries}  />
        <Route path="/favoritos" component={Favoritos}  />
        <Route path="/busqueda/:texto" component={Busqueda}  />
        <Route path="" exact={true} component={Notfound}  />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
