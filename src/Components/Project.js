import React, { useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Project = (props) => {

        const [projects, setProjects] = useState(null)

        const getProjects = () => {
            axios.get(`/api/projects/${props.match.params.id}`)
                .then((res) => setProjects(res.data))
        }
    
        // eslint-disable-next-line
        useEffect(() => getProjects(), [])

    return projects === null ?   
    (
      <div className='loaderComponent' />
    )
    :(  
        <div className='container-getProject'>
            <Link className="back-dashboard" to="/">
            <div className="box-2">
                <div className="btn btn-two">
                <span>RETOUR</span>
                </div>
            </div>
            </Link>
            <div className='container-project'>
                <figure>
                    <div>
                        <h3>{projects.project_title}</h3>
                        <img src={projects.project_img} alt={projects.project_title}/>
                    </div>
                    <figcaption>{projects.project_description}</figcaption>
                    {projects.project_stack ? <h4>{projects.project_stack}</h4> : ''}
                    {projects.project_github ? <h5><a href={projects.project_github} target='blank'><FontAwesomeIcon icon={faGithub} size="2x" />Voir le lien Github</a></h5> : ''}
                    {projects.project_github_front !== null ? <h5><a href={projects.project_github_front} target='blank'><FontAwesomeIcon icon={faGithub} size="2x" />Pour le front-end</a></h5> : ''}
                    {projects.project_link ? <h5><a href={projects.project_link} target='blank'>{projects.project_link}</a></h5> : ''} 
                    <h5>créé le : {projects.project_creation_date}</h5>
                </figure>
            </div>
        </div>
    )
}

export default Project