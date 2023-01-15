import React from "react";
import "./footer.css";
import {useNavigate, Link, NavLink} from 'react-router-dom';
import face from '../../assets/images/01face.jpg';
import insta from '../../assets/images/02inst.jpg';
import mail from '../../assets/images/03mail.jpg';

function Footer() {
    const navigate = useNavigate();

    return (
        <div className='footer'>
            <div className='footer--links__container'>

                <div className='footer--column-links'>
                    <h3>Wij zijn Social Brothers, een Digital Agency vol energie, ambitie en volledig digitaal gefocust</h3><br />
                    <div className='footer--column-white-links'>
                        <a>info@socialbrothers.nl</a><br />
                        <p>030 737 09 02</p><br />
                    </div>
                    <div className='social-media--img'>
                        <img src={face} className='social-media' alt='social-media'/>
                        <img src={insta} className='social-media' alt='social-media'/>
                        <img src={mail} className='social-media' alt='social-media'/>
                    </div>
                    <div className='small-print'>
                        <a>Algemene voorwaarden</a>
                        <a>Privacy statement</a>
                    </div>
                </div>

                <div className='footer--column-links'>
                    <h3>Digital marketing</h3>
                    <div className='footer--column-white-links'>
                        <a>Digital Marketing</a><br />
                        <a>SEO</a><br />
                        <a>SEA</a><br />
                        <a>Social Ads</a><br />
                    </div>
                </div>

                <div className='footer--column-links'>
                    <h3>Design</h3>
                    <div className='footer--column-white-links'>
                        <a>Design</a><br />
                    </div>
                </div>

                <div className='footer--column-links'>
                    <h3>Development</h3>
                    <div className='footer--column-white-links'>
                        <a>Development</a><br />
                        <a>Website</a><br />
                        <a>Webshop</a><br />
                        <a>Werken bij</a><br />
                        <a>API</a>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Footer;
