import React, { useContext } from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Blog from '../src/pages/blog/blog';
import SignIn from '../src/pages/signin/SignIn';
import SignUp from '../src/pages/signup/SignUp';
import HomepageSecure from "./pages/homepage-secure/Homepage-Secure";
import RedirectPage from "./pages/redirect-page/RedirectPage";
import Footer from "./components/footer/Footer";

function App () {
    const { isAuth } = useContext ( AuthContext );

    return (
        <>
            <div className="app">
                <Header />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path='/redirect-page' element={<RedirectPage />} />
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path="/homepage-secure" element={ isAuth ? <HomepageSecure/> : <Navigate to="/redirect-page" /> } />
                        <Route path='/redirect-page' element={<RedirectPage />} />
                    </Routes>
                </div>
            </div>
            <Footer />

        </>
    );
}

export default App;