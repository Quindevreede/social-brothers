import React, {useContext, useState} from 'react';
import './navbar.css';
import {useNavigate, Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import Button from "../button/Button";
import {RiMenu2Line, RiCloseLine, RiArrowDownSLine, RiSearchLine} from 'react-icons/ri';
import logo from '../../assets/images/sb-logo.svg';
import flagnl from '../../assets/images/flagnl.jpg';
import flagen from '../../assets/images/flagen.jpg';
import flagde from '../../assets/images/flagde.jpg';
import {useScrollPosition} from '../../hooks/useScrollPosition';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function NavBar() {
    const scrollPosition = useScrollPosition();
    const {isAuth,logout,user} = useContext (AuthContext);
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='nav-bar-outer-content__container'>

            { isAuth ?
                <div className={classNames(scrollPosition > 0 ? 'shadow' : 'shadow-none',
                    'transition-shadow grey sticky top-0')}>
                    <div className='navbar-content__container'>
                        <div className='navbar-left__container'>
                            <NavLink to='/' activeclassname='active'>
                                <div className='navbar-logo__container-secure'>
                                    <img src={logo} alt='sb-logo' />
                                    <h5>SECURE</h5>
                                </div>
                            </NavLink>
                        </div>
                        <div className='navbar-right__container'>
                            <NavLink to='/blog' activeclassname='active'>Blog</NavLink>
                            <NavLink to='/events' activeclassname='active'>Events</NavLink>
                            <NavLink to='/search' activeclassname='active'><RiSearchLine /></NavLink>

                            <Button
                                onClick={ logout }
                                type='button'
                                buttonStyle='btn--navbar3'
                                buttonSize='btn--sb'
                            >
                                Log Out
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
                                    type='button'
                                    buttonStyle='btn--navbar2'
                                    buttonSize='btn--wide'
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
                                    </div>
                                    <Button
                                        onClick={ logout }
                                        type='button'
                                        buttonStyle='btn--navbar3'
                                        buttonSize='btn--sb'
                                    >
                                        Log Out
                                    </Button>
                                    <div className='country-flags__container'>
                                        <div className='flag__container'><img src={flagnl} alt='flag-nl' /><p>NL</p></div>
                                        <div className='flag__container'><img src={flagen} alt='flag-nl' /><p>EN</p></div>
                                        <div className='flag__container'><img src={flagde} alt='flag-nl' /><p>DE</p></div>
                                    </div>
                                    <Button
                                        onClick={() => setToggleMenu(false)}
                                        type='button'
                                        buttonStyle='btn--navbar2'
                                        buttonSize='btn--wide'
                                    >
                                        <p className='x'>x</p>Sluit
                                    </Button>

                                </div>
                            )}
                        </div>
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
                            <NavLink to='/search' activeclassname='active'><RiSearchLine /></NavLink>

                        <Button
                            onClick={ () => navigate('/signin') }
                            type='button'
                            className='btn--navbar3'
                            buttonSize='btn--sb'
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
                                type='button'
                                buttonStyle='btn--navbar2'
                                buttonSize='btn--wide'
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
                                </div>
                                <Button
                                    onClick={ () => navigate('/signin') }
                                    type='button'
                                    className='btn--navbar3'
                                    buttonSize='btn--sb'
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
                                    type='button'
                                    buttonStyle='btn--navbar2'
                                    buttonSize='btn--wide'
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

