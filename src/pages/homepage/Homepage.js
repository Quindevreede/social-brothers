import React from "react";
import './homepage.css';
import headimg from '../../assets/images/2cbdc7b29b8b729db1b0ad933d96d3cbc1f83268.jpg';
import BlogComponent from '../../components/blogcomponent/BlogComponent';
import Events from '../../components/events/Events';

function Homepage() {
    return (
        <>
            <section className='homepage-head'>
                <img src={headimg} className='head-img' alt='head-img' />
                <div className='header-text'>
                    <h1>Welkom bij de Social Brothers Case!</h1>
                    <p>Deze opdracht bestaat uit het namaken van de de Case site, daarbij worden verschillende componenten gebruikt.
                    Daarbij wordt gekeken of alle elementen van de applicatie responsive zijn. Functionaliteit op verschillende
                    schermformaten is ook wenselijk.</p>
                </div>
            </section>
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <div className='homepage-top__container'>
                        <div className='blog__container'>
                            <BlogComponent />
                        </div>
                        <div className='event__container'>
                            <Events />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage;