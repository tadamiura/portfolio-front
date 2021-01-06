import React, { useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
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
            <Link
            to={'/'}>
                <span className='close'><FontAwesomeIcon icon={faTimesCircle} size="2x"/></span>
            </Link>
            <div className='container-project'>
                <figure>
                    <div className='primary-img'>
                        <img className='img-desktop' src={projects.project_img} alt={projects.project_title}/>
                    </div>
                    <div className='description'>
                        <h3>{projects.project_title}</h3>
                        <h4 className='title'>Le projet</h4>
                        <figcaption>{projects.project_description}</figcaption>
                        <h4 className='title'>La stack technique</h4>
                        {projects.project_stack ? <h4>{projects.project_stack}</h4> : ''}
                        {projects.project_img_mobile_1 || projects.project_img_mobile_2 ? <h4 className='title'>Les visuels</h4> : ""}
                        <div className="img-mobile-container">
                            {projects.project_img_mobile_1 ? <img src={projects.project_img_mobile_1} alt={projects.project_title}/> : ""}
                            {projects.project_img_mobile_2 ? <img src={projects.project_img_mobile_2} alt={projects.project_title}/> : ""}
                        </div>
                        {projects.project_github || projects.project_github_front || projects.project_link ? <h4 className='title'>Les liens</h4> : ""}
                        {projects.project_github ? <h5><a className='img-mobile' href={projects.project_github} target='blank'><FontAwesomeIcon icon={faGithub} size="2x" />Voir le lien Github</a></h5> : ''}
                        {projects.project_github_front ? <h5><a href={projects.project_github_front} target='blank'><FontAwesomeIcon icon={faGithub} size="2x" />Pour le front-end</a></h5> : ''}
                        {projects.project_link ? <h5><a href={projects.project_link} target='blank'>{projects.project_link}</a></h5> : ''} 
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default Project