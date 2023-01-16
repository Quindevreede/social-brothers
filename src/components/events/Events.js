import React, { useState } from 'react';
import './events.css'
import Menu from '../eventscomponent/EventsComponent';
import Categories from '../eventscomponent/CategoriesComponent';
import recordsDatabase from '../eventscomponent/dataEvents';

const allCategories = ['ALL', ...new Set(recordsDatabase.map((record) => record.category))];

function Events() {
    const [menuItems, setMenuItems] = useState(recordsDatabase);
    const [categories, setCategories] = useState(allCategories);
    categories.sort();

    const filterItems = (category) => {
        if (category === 'ALL') {
            setMenuItems(recordsDatabase);
            return;
        }
        const newItems = recordsDatabase.filter((record) => record.category === category);
        setMenuItems(newItems);
    };

    return (
        <section className='outer-content__container'>
            <div className='inner-content__container'>
                    <main className='top20-top__container'>
                        <div className='title-event-homepage'>
                            <h3>Opkomende Events</h3>
                        </div>
                    <div className='top20__container'>
                        <div className='top20--categories__container'>
                        <Categories categories={categories} filterItems={filterItems} />
                        </div>
                        <div className='top20-content__container'>
                            <Menu recordsDatabase={menuItems} />
                        </div>
                    </div>
                    </main>
                </div>
            </section>
    );
}

export default Events;