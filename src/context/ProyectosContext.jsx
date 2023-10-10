import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

const ProyectosContext = createContext();

export const ProyectosProvider = ({children}) => {

	const [proyectos, setProyectos] = useState(projectsData);


    return(
        <ProyectosContext.Provider
        value={{
            proyectos,
            setProyectos
        }}
        >
            {children}
        </ProyectosContext.Provider>
    )
}


export default ProyectosContext
