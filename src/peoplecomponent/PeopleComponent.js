import React from 'react';
import './peopleComponent.css';
import dataPeople from './dataPeople';
import Button from '../button/Button';

function PeopleComponent() {
    const [list, setList] = React.useState(dataPeople);

    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);

        setList(newList);
    }

    return (
        <>
            <h3><strong>{list.length}</strong> PEOPLE IN LIST</h3>

            <article className='people-component__container'>
                {list.map((item) => (
                    <div className='people-component-content__container' key={item.id}>
                        <div className='people-component-content--img'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className='people-component-content--text'>
                            <h4>NAME: {item.name}</h4>
                            <p>AGE: {item.age}</p>
                            <Button
                                type='button'
                                buttonStyle='btn--people-remove'
                                buttonSize='btn--small'
                                onClick={() => handleRemove(item.id)}
                            >
                                X
                            </Button>
                        </div>
                    </div>
                ))}
            </article>

            <Button
                type='button'
                buttonStyle='btn--people-clear'
                buttonSize='btn--medium'
                onClick={() => setList([])}
            >
                clear all
            </Button>
        </>
    );
}

export default PeopleComponent;