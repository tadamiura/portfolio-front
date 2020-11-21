import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Header = () => {
    const [aboutMe, setAboutMe] = useState(null)

    const getAboutMe = () => {
        axios.get('http://localhost:8080/api/about-me')
            .then((res) => setAboutMe(res.data) || console.log(res.data))
    }

    useEffect(() => getAboutMe(), [])

    return aboutMe === null
        ? <p>Loading</p>
        : (
            <div className='about-me-dashboard'>
                {aboutMe.map((me) => 
                    <div key={me.id}>
                        <h1 className="my-firstname">{me.firstname}</h1>
                        <h2 className="my-lastname">{me.lastname}</h2>
                        <h3 className="my-description">{me.description}</h3>
                    </div>
                )}
            </div>
        )
}

export default Header