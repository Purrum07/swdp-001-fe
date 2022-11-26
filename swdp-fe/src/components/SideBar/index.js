import { NavLink } from 'react-router-dom';
import { FaHome , FaBarcode , FaChartBar, FaCheckSquare } from 'react-icons/fa';

function SideBar() {
    return (
        <div className="sidebar">
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
            </ul>
        </div>
    );
}

export default SideBar;