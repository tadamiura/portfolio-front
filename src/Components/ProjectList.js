import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const ProjectList = () => {

    const [projects, setProjects] = useState(null)

    const getProjects = () => {
        axios.get('/api/projects')
            .then((res) => setProjects(res.data))
    }

    useEffect(() => getProjects(), [])

    return projects === null ? 
        (
            <div className='loaderComponent' />
        )
        : (
            <div className='project-list'>
                {projects.map((project) => 
                    <div className='project-info-container' key={project.id}>
                        <Link key={project.id} 
                        to={`/project/${project.id}`} 
                        className='project-link'
                        >
                            <figure>
                                <img className='project-list-img' src={project.project_img} alt={project.project_title}/>
                                <figcaption>{project.project_title}</figcaption>
                            </figure>
                        </Link>
                    </div>
                )}
            </div>
        )
}

export default ProjectList