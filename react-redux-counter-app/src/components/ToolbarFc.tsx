import { useDispatch } from 'react-redux';

const ToolbarFc = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch({ type: 'INC' })}
                className='btn btn-outline-primary'
            >
                Increment
            </button>
            <button
                onClick={() => dispatch({ type: 'DEC' })}
                className='btn btn-outline-primary'
            >
                Decrement
            </button>
            <button
                onClick={() => dispatch({ type: 'DOUBLE_UP' })}
                className='btn btn-outline-primary'
            >
                Double up
            </button>
        </div>
    );
};

export default ToolbarFc;
