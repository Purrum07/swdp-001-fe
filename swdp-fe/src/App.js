import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Inicio from './containers/Inicio';
import VisualizadorEtiquetas from './containers/VisualizadorEtiquetas';
import CreacionPlantillas from './containers/CreacionPlantillas';
import PlantillaNueva from './containers/PlantillaNueva';
import ModificarPlantillas from './containers/ModificarPlantillas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Row className='col-12 main-row'>
        <Col className='col-2 main-col'>
          <Sidebar/>
        </Col>
        <Col className='col-10 main-col'>
          <div className="content w-100">
            <Header/>
            <div className="innerContent w-100">
              <Routes>
                <Route path="/" exact="true" element={<Inicio/>}/>
                <Route path="/VisualizadorEtiquetas" exact="true" element={<VisualizadorEtiquetas/>}/>
                <Route path="/plantillas" exact="true" element={<CreacionPlantillas/>}/>
                <Route path="/CrearPlantilla" exact="true" element={<PlantillaNueva/>}/>
                <Route path="/ActualizarPlantilla" exact="true" element={<ModificarPlantillas/>}/>
              </Routes>
            </div>
          </div>
        </Col>
        </Row>
      </div>
    </BrowserRouter>
  );
}

export default App;
