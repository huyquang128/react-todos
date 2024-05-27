import reducer from "./reducer";

export default function logger() {
    return (prevState, action) => {
        console.group(action.type);
        console.log('Prev State: ', prevState);
        console.log('Value: ', action.payload);
        const nextState = reducer(prevState, action);
        console.log('Next State: ', nextState);
        console.groupEnd();
        return nextState;
    };
}
