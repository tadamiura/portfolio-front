import React, { useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Project = () => {

        const [projects, setProjects] = useState(null)
    
        const getProjects = () => {
            axios.get(`/api/projects`)
                .then((res) => setProjects(res.data))
        }
    
        useEffect(() => getProjects(), [])

    return projects === null ?   
    (
      <div className='loader' />
    )
    :(  
        <div className='container-getProject'>
            <Link className="back-dashboard" to="/">
            <div class="box-2">
                <div class="btn btn-two">
                <span>RETOUR</span>
                </div>
            </div>
            </Link>
            {projects.map( project =>
            <div className='container-project' key={project.id}>
                <figure>
                    <div>
                        <h3>{project.project_title}</h3>
                        <img src={project.project_img} alt={project.project_title}/>
                    </div>
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