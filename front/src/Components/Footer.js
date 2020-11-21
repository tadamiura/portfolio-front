import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Footer = () => {
    const [links, setLinks] = useState(null)

    const getLinks = () => {
        axios.get('http://localhost:8080/api/about-me/links')
            .then((res) => setLinks(res.data))
    }

    useEffect(() => getLinks(), [])

    return links === null ?
    <div>Loading ...</div>
    :
    (
        <div className='footer'>
            Vous désirez en savoir plus sur mon profil et mes motivations ? 
            {links.map(link => 
                <div key={link.id}>
                    <ul>
                        <li>{link.email}</li>
                        <li><a href={link.linkedin_profil} target='blank'>LinkedIn</a></li>
                        <li><a href={link.github_profil} target='blank'>Github</a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Footer