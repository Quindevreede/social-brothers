import React from 'react';
import './eventscomponent.css';

const EventsComponent = ({ recordsDatabase }) => {
    return (

        <div className='top20-outer__container'>
            {recordsDatabase.map((menuItem, index) => {
                const { title, content, date, img } = menuItem;
                if (menuItem.id < 2) {
                return (
                    <article key={index} className='top20-component__container-small'>
                            <div className='top20--image'>
                            <img src={img} alt={title} />
                            </div>
                            <div className='record-content__container'>
                                <div className='record--content'>
                                    <h3>{title}</h3>
                                    <p>{content}</p>
                                </div>
                            </div>
                        </article>

                )} else {
                    return (
                    <article key={index} className='top20-component__container'>
                        <div className='top20--image'>
                            <img src={img} alt={title} />
                        </div>
                        <div className='record-content__container'>
                            <div className='record--content'>
                                <p>{date}</p>
                                <h3>{title}</h3>
                                <p>{content}</p>
                            </div>
                        </div>
                    </article>
                    )
                }


            })}
        </div>
    );
}

export default EventsComponent;