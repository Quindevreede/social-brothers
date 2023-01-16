import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputField from "../../components/inputfield/InputField";

function SignUp () {
    const [ email, setEmail ] = useState ( '' );
    const [ username, setUsername ] = useState ( '' );
    const [ password, setPassword ] = useState ( '' );

    const [ error, toggleError ] = useState ( false );
    const [ loading, toggleLoading ] = useState ( false );

    const source = axios.CancelToken.source ();
    const navigate = useNavigate();

    useEffect ( () => {
        return function cleanup () {
            source.cancel ();
        }
    }, [] );

    async function handleSubmit ( e ) {
        e.preventDefault ();
        toggleError ( false );
        toggleLoading ( true );

        try {
            await axios.post ( 'https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email : email,
                password : password,
                username : username,
            }, {
                cancelToken : source.token,
            } );

            navigate( '/signin' );
        } catch ( e ) {
            console.error ( e );
            toggleError ( true );
        }

        toggleLoading ( false );
    }

    const handleChange =
        ( e )  => { setPassword ( e.target.value )
    };

    return (
        <>
            <section className="outer-content__container">
                <div className="inner-content__container">

                        <form onSubmit={ handleSubmit }>
                        <label htmlFor="email-field">
                            EMAIL ADDRESS:
                            <InputField
                                className="form__container"
                                type="email"
                                id="email"
                                name="email"
                                value={ email }
                                onChange={ ( e ) => setEmail ( e.target.value ) }
                            />
                        </label>

                        <label htmlFor="username-field">
                            USERNAME:
                            <InputField
                                className="form__container"
                                type="text"
                                id="username-field"
                                value={ username }
                                onChange={ ( e ) => setUsername ( e.target.value ) }
                            />
                        </label>

                            <label htmlFor="password-field">
                                PASSWORD:
                                <InputField
                                    className="form__container"
                                    type="password"
                                    id="password-field"
                                    name="password"
                                    value={ password }
                                    onChange={ handleChange }
                                />
                            </label>
                        { error && <p className="error-message">ERROR username and/or password input must be at least 7 characters</p> }

                        <button
                            type="submit"
                            buttonStyle="btn--form"
                            buttonSize="btn--small"
                            disabled={ loading }
                        >
                            REGISTER
                        </button>

                    </form>
                    <section className="text__content">
                        <p>ALREADY HAVE AN ACCOUNT? <Link to="/signin">LOG IN</Link></p>
                    </section>
                </div>
            </section>
        </>
    );
}

export default SignUp;
