import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFigma, faGithub, faGitlab, faGitSquare, faJsSquare, faLaravel, faNode, faPhp, faReact, faSlack, faTrello, faVuejs} from "@fortawesome/free-brands-svg-icons"
import axios from 'axios'

const Header = () => {
    const [aboutMe, setAboutMe] = useState(null)

    const getAboutMe = () => {
        axios.get('/api/about-me')
            .then((res) => setAboutMe(res.data))
    }

    useEffect(() => getAboutMe(), [])

    return aboutMe === null
        ? (
            <div className='loader' />
          )
        : (
            <div className='header'>
                {aboutMe.map((me) => 
                    <div key={me.id} className="about-me-container">
                        <h1 className="my-firstname">{me.firstname} {me.lastname}</h1>
                        <h2 className="my-lastname">{me.title}</h2>
                        <span className="subtitle">{me.subtitle}</span>
                        <h3 className="my-description">{me.description}</h3>
                    </div>
                )}
                <div className="my-stack-container">
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faJsSquare} size="3x"/></span>
                        <div className="stack-name">JavaScript</div>
                    </div>
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faNode} size="3x"/></span>
                        <div className="stack-name">Node.js</div>
                    </div>
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faReact} size="3x"/></span>
                        <div className="stack-name">ReactJS</div>
                    </div>
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faVuejs} size="3x"/></span>
                        <div className="stack-name">Vue.js</div>
                    </div>
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faPhp} size="3x"/></span>
                        <div className="stack-name">PHP</div>
                    </div>
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faLaravel} size="3x"/></span>
                        <div className="stack-name">Laravel</div>
                    </div>
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faGitSquare} size="3x"/></span>
                        <div className="stack-name">Git</div>
                    </div>
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faGithub} size="3x"/></span>
                        <div className="stack-name">Github</div>
                    </div>
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faGitlab} size="3x"/></span>
                        <div className="stack-name">Gitlab</div>
                    </div>
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faFigma} size="3x"/></span>
                        <div className="stack-name">Figma</div>
                    </div>    
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faTrello} size="3x"/></span>
                        <div className="stack-name">Trello</div>
                    </div>
                    <div className="my-stack">
                        <span><FontAwesomeIcon icon={faSlack} size="3x"/></span>
                        <div className="stack-name">Slack</div>
                    </div>
                </div>
            </div>
        )
}

export default Header