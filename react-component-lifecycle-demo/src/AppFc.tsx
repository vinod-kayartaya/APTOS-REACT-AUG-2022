import { useState } from 'react';
import Greeting from './Greeting';
import GreetingFc from './GreetingFc';

const AppFc = () => {
    const [greetingVisible, setGreetingVisible] = useState(true);
    return (
        <>
            <div className='container'>
                <h1>Lifecycle demo of a functional component</h1>
                <hr />

                <button
                    onClick={() => setGreetingVisible(!greetingVisible)}
                    className='btn btn-outline-primary'
                >
                    Show/Hide Greeting component
                </button>

                {greetingVisible && <GreetingFc />}
                {greetingVisible && <Greeting isUpper={true} />}
            </div>
        </>
    );
};

export default AppFc;
