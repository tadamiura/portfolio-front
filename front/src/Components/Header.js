import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Header = () => {
    const [aboutMe, setAboutMe] = useState(null)

    const getAboutMe = () => {
        axios.get('http://localhost:8080/api/about-me')
            .then((res) => setAboutMe(res.data))
    }

    useEffect(() => getAboutMe(), [])

    return aboutMe === null
        ? <p>Loading</p>
        : (
            <div className='header'>
                {aboutMe.map((me) => 
                    <div key={me.id}>
                        <h1 className="my-firstname">{me.firstname} {me.lastname}</h1>
                        <h2 className="my-lastname">{me.title}</h2>
                        <h3 className="my-description">{me.description}</h3>
                    </div>
                )}
            </div>
        )
}

export default Header