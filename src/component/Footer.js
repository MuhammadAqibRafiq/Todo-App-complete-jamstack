import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import * as containerStyles from './../style/card.module.css';


const Footer = () => {
    return (  
        
        <div className='m'>
 <div className={containerStyles.footertop}>

<a href='https://www.linkedin.com/in/aqib-rafiq-2a3b65213/'> <FontAwesomeIcon icon={faLinkedin} size='2x' pull="left" /></a>
<a href='https://github.com/MuhammadAqibRafiq'>  <FontAwesomeIcon icon={faGithub} color='black' size='2x' pull="right" /></a>
</div>

<div className={containerStyles.footerbot}><h6><a href="http://aqib-rafiq.surge.sh/" style={{ textDecoration: 'none', color: 'white' }}>© copyright reserved 2021</a> </h6></div>

        </div>
    )
}

export default Footer
