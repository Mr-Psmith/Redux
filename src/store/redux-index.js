import {createStore} from "redux"; //or we can import {createStore} exactly

const reducer = (state = {counter: 0}, action) => {

    if (action.type === "increment") {
        return{
        counter: state.counter +1
        };
    }
    if (action.type === "decrement") {
        return{
        counter: state.counter -1
        };
    }

    return state;


};

const store = createStore(reducer);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

export default store;