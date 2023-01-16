import React, {useContext, useEffect, useState} from 'react';
import "./homepage-secure.css";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

function HomepageSecure() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);
    const source = axios.CancelToken.source();

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchUserData() {
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get ( `https://frontend-educational-backend.herokuapp.com/api/user`, {
                    headers : {
                        "Content-Type" : "application/json",
                        Authorization : `Bearer ${ token }`,
                    },
                    cancelToken: source.token,
                });

                setProfileData(result.data);
            } catch (e) {
                console.log("the username is not relevant for this page")
            }
        }
        fetchUserData();

        return function cleanup() {
            source.cancel();
        }
    }, []);

    return (
        <>
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <p>user : {user.username}</p>
                    <section className="home-page">
                        <div className="main-menu">
                            <h3>Welcome to our SECURE PAGE, click <Link to="/">HOME</Link></h3>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}

export default HomepageSecure;
