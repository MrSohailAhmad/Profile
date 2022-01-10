import React, { Component } from 'react'
import cvDoc from '../img/mycv.pdf'

import { FaFacebook, FaDownload, FaGithub, FaInstagram } from 'react-icons/fa';
export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='footer'>
                    <div className='footer-container'>
                        <div className='footer-left-side'>
                            <a href='https://www.instagram.com/code_totech/' target='blank' ><FaInstagram /> </a>
                            <a href='https://github.com/MrSohailAhmad' target='blank' ><FaGithub /> </a>
                            <a href='https://web.facebook.com/profile.php?id=100069678930838' target='blank' ><FaFacebook /> </a>
                        </div>
                        <div className='footer-right-side'>
                            <a href={cvDoc} download target='blank'><FaDownload /> </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;
