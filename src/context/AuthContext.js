import React,{createContext,useEffect,useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import isTokenValid from '../helpers/isTokenValid';

export const AuthContext = createContext ({});

function AuthContextProvider ( {children} ) {
    const navigate = useNavigate();
    const [isAuth,toggleIsAuth] = useState ({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect (() => {
        const token = localStorage.getItem ('token');

        if (token && isTokenValid (token)) {
            const decoded = jwt_decode (token);
            fetchUserData (decoded.sub,token);
        } else {
            localStorage.clear ();
            toggleIsAuth ({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    },[]);


    function login ( JWT ) {
        localStorage.setItem ('token',JWT);
        const decoded = jwt_decode (JWT);

        fetchUserData (decoded.sub,JWT,'/homepage-secure');
    }

    function logout () {
        localStorage.clear ();
        toggleIsAuth ({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log ('USER LOGGED OUT');
        navigate('/');
    }

    async function fetchUserData ( id,token,redirectUrl ) {
        const controller = new AbortController ();
        try {
            const result = await axios.get ( `https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers : {
                    "Content-Type" : "application/json",
                    Authorization : `Bearer ${ token }`,
                },
                signal: controller.signal,
            });

            toggleIsAuth ( {
                ...isAuth,
                isAuth : true,
                user : {
                    username : result.data.username,
                    email : result.data.email,
                    id : result.data.id,
                },
                status : 'done',
            } );

            if (redirectUrl) {
                navigate (redirectUrl);
            }

        } catch (e) {
            localStorage.clear ();
            console.log ("no user has registered yet");
            toggleIsAuth ({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
        return function cleanup() {
            console.log ("no user has registered yet");
            controller.abort ();
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={ contextData }>
            { isAuth.status === 'done' ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
