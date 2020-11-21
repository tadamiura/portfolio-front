import React, { useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
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
            {projects.map( project =>
            <div className='container-project' key={project.id}>
                <h3>{project.project_title}</h3>
                <figure>
                    <img src={project.project_img} alt={project.project_title}/>
                    <h4>{project.project_stack}</h4>
                    <h5><a href={project.project_github} target='blank'><FontAwesomeIcon icon={faGithub} size="2x" />Voir le lien Github</a></h5>
                    <h5><a href={project.project_link} target='blank'>{project.project_link}</a></h5>    
                    <h5>créé le : {project.project_creation_date}</h5>
                    <figcaption>{project.project_description}</figcaption>
                </figure>
            </div>
                 )}
        </div>
    )
}

export default Project