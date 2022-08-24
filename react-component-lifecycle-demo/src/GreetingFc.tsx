import { useState, useEffect } from 'react';
import withBorder from './withBorder';

const GreetingFc = () => {
    let [name, setName] = useState('friend');
    let [city, setCity] = useState('your city');

    // callback/effect is executed only once when the component is loaded
    useEffect(() => {
        console.log('GreetingFc useEffect callback with 0 deps is called');

        return () => {
            console.log('GreetingFc is unmounted!');
        };
    }, []);

    // callback/effect is executed when any state is mutated
    useEffect(() => {
        console.log(
            'GreetingFc useEffect callback with no deps called. Some state must have changed!'
        );
    });

    // callback/effect is executed when the state "name" is mutated
    useEffect(() => {
        console.log('the state "name" is mutated');
    }, [name]);

    // callback/effect is executed when the state "city" is mutated
    useEffect(() => {
        console.log('the state "city" is mutated');
    }, [city]);

    console.log('GreetingFc() is rendered at', new Date().toISOString());

    return (
        <>
            <form style={{ width: '400px' }}>
                <div>
                    <label htmlFor='name'>Enter name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className='form-control'
                    />
                </div>
                <div>
                    <label htmlFor='city'>Enter city</label>
                    <input
                        type='text'
                        id='city'
                        name='city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className='form-control'
                    />
                </div>
            </form>
            <h3>
                Hello {name}, how is weather in {city}?
            </h3>
        </>
    );
};

export default withBorder(GreetingFc, { borderColor: 'blue' });
