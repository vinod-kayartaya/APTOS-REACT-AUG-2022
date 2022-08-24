import { useSelector } from 'react-redux';

const CounterFc = () => {
    const count = useSelector((store: any) => store.counterReducer.count);

    return (
        <>
            <h3>Value of count is {count}</h3>
        </>
    );
};

export default CounterFc;
