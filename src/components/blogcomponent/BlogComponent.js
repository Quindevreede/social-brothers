import React, { useState } from 'react';
import './blogComponent.css';
import data from './dataArt';

function BlogComponent() {
    const [index, setIndex] = useState(0);
    return (

        <article className='gallery-component__container'>
            <div className='title-blog-homepage'>
            <h2>De Nieuwste Blogs</h2>
            </div>
            <article className='people-component__container'>
                {data.map((item, index) => (
                    item.id < 4 &&
                    <div className='people-component-content__container' key={index}>
                    <div className='people-component-content--img'>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className='people-component-content--text'>
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                        <a href={"http://localhost:3000/blog/" + item.id}>Lees Meer -></a>
                    </div>
                    </div>
                ))}
            </article>

            <article className='people-component__container-small'>
                <div className='title-blog-homepage-small'>
                    <h3>De Nieuwste Blogs</h3>
                </div>
                {data.map((item) => (
                    item.id < 2 &&
                    <div className='people-component-content__container' key={index}>
                        <div className='people-component-content--img'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className='people-component-content--text'>
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                            <a href={"http://localhost:3000/blog/" + item.id}>Lees Meer -></a>
                        </div>

                    </div>
                ))}
            </article>
        </article>
    );
}

export default BlogComponent;
