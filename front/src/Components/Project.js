import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Project = () => {

        const [projects, setProjects] = useState(null)
    
        const getProjects = () => {
            axios.get(`http://localhost:8080/api/projects`)
                .then((res) => setProjects(res.data))
        }
    
        useEffect(() => getProjects(), [])

    return projects === null ?   
    <p>Loading</p>
    :(
        <div className='container-getProject'>
            {projects.map( projects =>
            <div className='container-project' key={projects.id}>
                <h2 className='project-name'>{projects.project_title}</h2>
                <p className='project-description'>Créé le : {projects.description}</p>
                <p className='project-stack'>{projects.stack}</p>
                <p className='project-date'>Durée du projet : {projects.creation_date}</p>
            </div>
                 )}
        </div>
    )
}

export default Project