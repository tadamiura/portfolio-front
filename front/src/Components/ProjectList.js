import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const ProjectList = () => {
    const [projects, setProjects] = useState(null)

    const getProjects = () => {
        axios.get('http://localhost:8080/api/projects')
            .then((res) => setProjects(res.data))
    }

    useEffect(() => getProjects(), [])

    return projects === null
        ? <p>Loading</p>
        : (
            <div className='project-list'>
                {projects.map((project) => 
                    <div class='project-info-container' key={project.id}>
                        <Link key={project.id} to='project' className='project-link'>
                            <figure>
                                <img src={project.project_img} alt={project.project_title}/>
                                <figcaption>{project.project_title}</figcaption>
                            </figure>
                        </Link>
                    </div>
                )}
            </div>
        )
}

export default ProjectList