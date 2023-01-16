import React from 'react';
import './categoriescomponent.css';
import Button from '../../components/button/Button';

function CategoriesComponent({ categories, filterItems }) {

    return (
        <div className='top20-category-btn__container'>
            {categories.map((category, index) => {

                return (
                    <button
                        type='button'
                        className='category-buttons'
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
}

export default CategoriesComponent;