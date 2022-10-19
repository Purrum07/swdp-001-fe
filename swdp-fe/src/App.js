import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Inicio from './containers/Inicio';
import VisualizadorEtiquetas from './containers/VisualizadorEtiquetas';
import Utilidades from './containers/Utilidades';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar/>
        <div className="content w-100">
          <Header/>
          <div className="innerContent">
            <Routes>
              <Route path="/" exact="true" element={<Inicio/>}/>
              <Route path="/VisualizadorEtiquetas" exact="true" element={<VisualizadorEtiquetas/>}/>
              <Route path="/Utilidades" exact="true" element={<Utilidades/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
