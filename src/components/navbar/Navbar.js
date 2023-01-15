import React, {useContext, useState} from 'react';
import "./navbar.css";
import {useNavigate, Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import Button from "../button/Button";
import {RiMenu2Line, RiCloseLine, RiArrowDownSLine, RiSearchLine} from 'react-icons/ri';
import logo from '../../assets/images/sb-logo.svg';
import flagnl from '../../assets/images/flagnl.jpg';
import flagen from '../../assets/images/flagen.jpg';
import flagde from '../../assets/images/flagde.jpg';
import {useScrollPosition} from "../../hooks/useScrollPosition";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function NavBar() {
    const scrollPosition = useScrollPosition();
    const {isAuth,logout,user} = useContext (AuthContext);
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="nav-bar-outer-content__container">

            { isAuth ?
                <div className='navbar-top__container sticky'>
                    <div className='navbar-content__container'>
                        <NavLink to='/' activeclassname='active'>
                            <div className='navbar-logo__container'>
                                <h1 className="upper--logo">
                                    DATA FETCH 101
                                </h1>
                            </div>
                        </NavLink>
                        <div className='navbar-links__container'>
                            <NavLink to='/page1' activeclassname='active'>PAGE 1</NavLink>
                            <NavLink to='/page2' activeclassname='active'>PAGE 2</NavLink>
                            <NavLink to='/page3' activeclassname='active'>PAGE 3</NavLink>
                            <NavLink to='/page4' activeclassname='active'>PAGE 4</NavLink>
                            <NavLink to='/contact' activeclassname='active'>CONTACT</NavLink>
                            <NavLink to='/faq' activeclassname='active'>FAQ</NavLink>
                        </div>
                    </div>
                    <div className='navbar-menu-top__container'>
                        {toggleMenu
                            ? <RiCloseLine color='#12b0d3' size={27} onClick={() => setToggleMenu(false)} />
                            : <RiMenu2Line color='#12b0d3' size={27} onClick={() => setToggleMenu(true)} />}
                        {toggleMenu && (
                            <div className='navbar-menu__container scale-up-center'>
                                <div className='navbar-menu-links__container'>
                                    <NavLink to='/page 1' className='menu--content'><p>PAGE 1</p></NavLink>
                                    <NavLink to='/page 2' className='menu--content'><p>PAGE 2</p></NavLink>
                                    <NavLink to='/page 3' className='menu--content'><p>PAGE 3</p></NavLink>
                                    <NavLink to='/page 4' className='menu--content'><p>PAGE 4</p></NavLink>
                                    <NavLink to='/contact' className='menu--content'><p>CONTACT</p></NavLink>
                                    <NavLink to='/faq' className='menu--content'><p>FAQ</p></NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                :
                <div className={classNames(scrollPosition > 0 ? 'shadow' : 'shadow-none',
                    'transition-shadow grey sticky top-0')}>
                    <div className='navbar-content__container'>
                        <div className='navbar-left__container'>
                        <NavLink to='/' activeclassname='active'>
                            <div className='navbar-logo__container'>
                                <img src={logo} alt='sb-logo'/>
                            </div>
                        </NavLink>
                        </div>
                        <div className='navbar-right__container'>
                            <NavLink to='/blog' activeclassname='active'>Blog</NavLink>
                            <NavLink to='/events' activeclassname='active'>Events</NavLink>
                            <NavLink to='/werken-bij' activeclassname='active'>Werken Bij</NavLink>
                            <NavLink to='/search' activeclassname='active'><RiSearchLine /></NavLink>

                        <Button
                            onClick={ () => navigate('/signin') }
                            type="button"
                            className="btn--navbar3"
                            buttonSize="btn--sb"
                        >
                            Log In
                        </Button>
                        </div>
                    </div>

                    <div className='navbar-menu-top__container'>
                        <div className='navbar-menu__container'>
                        <div className='toggleMenu'>
                        {toggleMenu
                            ? <RiCloseLine color='black' size={27} onClick={() => setToggleMenu(false)} />
                            : <RiMenu2Line color='black' size={27} onClick={() => setToggleMenu(true)} />}
                            <Button
                                onClick={() => setToggleMenu(true)}
                                type="button"
                                buttonStyle="btn--navbar2"
                                buttonSize="btn--wide"
                            >
                                Menu
                            </Button>
                        </div>
                        <a>Contact</a>
                        {toggleMenu && (
                            <div className='navbar-dropdown__container scale-up-center'>
                                <div className='navbar-menu-links__container'>
                                    <img src={logo} alt='sb-logo'/>
                                    <NavLink to='/blog' className='menu--content1'><p>Blog</p><RiArrowDownSLine className='arrow'/></NavLink>
                                    <NavLink to='/events' className='menu--content'><p>Events</p></NavLink>
                                    <NavLink to='/werken-bij' className='menu--content'><p>Werken Bij</p></NavLink>
                                </div>
                                <Button
                                    onClick={ () => navigate('/signin') }
                                    type="button"
                                    className="btn--navbar3"
                                    buttonSize="btn--sb"
                                >
                                    Log In
                                </Button>
                                <div className='country-flags__container'>
                                    <div className='flag__container'><img src={flagnl} alt='flag-nl' /><p>NL</p></div>
                                    <div className='flag__container'><img src={flagen} alt='flag-nl' /><p>EN</p></div>
                                    <div className='flag__container'><img src={flagde} alt='flag-nl' /><p>DE</p></div>
                                </div>
                                <Button
                                    onClick={() => setToggleMenu(false)}
                                    type="button"
                                    buttonStyle="btn--navbar2"
                                    buttonSize="btn--wide"
                                >
                                    <p className='x'>x</p>Sluit
                                </Button>

                            </div>
                        )}
                        </div>
                </div>
                </div>
            }
        </nav>
    );
}

export default NavBar;

