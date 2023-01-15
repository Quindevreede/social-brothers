import React, { useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/footer/Footer";

function App () {

    return (
        <>
            <div className="app">
                <Header />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                    </Routes>
                </div>
            </div>
            <Footer />

        </>
    );
}

export default App;