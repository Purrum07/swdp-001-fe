import { NavLink } from 'react-router-dom';

import { FaHome , FaBarcode , FaChartBar, FaCheckSquare } from 'react-icons/fa';
import {Navbar} from 'react-bootstrap/Navbar';

function SideBar() {
    return (
        <div className="sidebar col-2">

            <ul>
                <li>
                    <NavLink to="/" className="text-light rounded py-2 w-100 d-inline-block px-3" activeclassname="active">
                        <FaHome className="me-2"/> Inicio
                    </NavLink>  
                </li>
                <li>
                    <NavLink to="/VisualizadorEtiquetas" className="text-light rounded py-2 d-inline-block px-3" activeclassname="active">
                        <FaBarcode className="me-2"/> Etiquetas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/plantillas" className="text-light rounded py-2 d-inline-block px-3" activeclassname="active">
                        <FaCheckSquare className="me-2"/> Plantillas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Utilidades" className="text-light rounded py-2 d-inline-block px-3" activeclassname="active">
                        <FaChartBar className="me-2"/> Utilidades
                    </NavLink>  
                </li>
                <li>
                    <NavLink to="/AdicionProductos" className="text-light rounded py-2 d-inline-block px-3" activeclassname="active">
                        <FaPlusCircle className="me-2"/> Agregar Producto
                    </NavLink>  
                </li>
            </ul>
        </div>
    );
}

export default SideBar;