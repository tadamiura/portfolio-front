import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faGithub,
    faLinkedin 
} from "@fortawesome/free-brands-svg-icons"
import axios from 'axios'

const Footer = () => {
    const [links, setLinks] = useState(null)

    const getLinks = () => {
        axios.get('/api/about-me/links')
            .then((res) => setLinks(res.data))
    }

    useEffect(() => getLinks(), [])

    return links === null ?
    (
        <div className='loader' />
    )
    :
    (
        <div className='footer'>
            Vous désirez en savoir plus sur mon profil et mes motivations ? 
            {links.map(link => 
                <div key={link.id}>
                    <ul>
                    <li key='mail'><a href={`mailto:${link.email}`}>N'hésitez pas à me contacter <span className="email">{link.email}</span></a></li>
                        <span className='logo-container'>
                            <li key='likedin'><a href={link.linkedin_profil} target='blank'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                            <li key='github'><a href={link.github_profil} target='blank'><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                        </span>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Footer