// a Higher Order Component is a function that takes one component
// and returns another/same/modified component

function withLoading(OriginalComponent: any, key: string) {
    // we can do any logic here
    // and finally return a new/modified component

    return (props: any) => {
        const data = props[key];

        return data.length === 0 ? (
            <h1>Loading... pls wait.</h1>
        ) : (
            <OriginalComponent {...props} />
        );
    };
}

// function withLoading(key: string) {
//     return function (OldComponent: any) {
//         return (props: any) => {
//             return props[key].length === 0 ? (
//                 <h3 className='text-warning'>Loading, please wait...</h3>
//             ) : (
//                 <OldComponent {...props} />
//             );
//         };
//     };
// }

export default withLoading;
