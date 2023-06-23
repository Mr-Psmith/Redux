import {createStore} from "redux"; //or we can import {createStore} exactly

const initialState = { counter: 0, showCounter: true}; //easier to read

const reducer = (state = initialState, action) => {

    if (action.type === "increment") {
        return{
        counter: state.counter +1,
        showCounter: state.showCounter // have to set it, so we set to the value we currently having
        };
    }
    if (action.type === "increase") {
        return {
            counter: state.counter + action.valueProp,
            showCounter: state.showCounter
    }
    }

    if (action.type === "decrement") {
        return{
        counter: state.counter -1,
        showCounter: state.showCounter
        };
    }

    if (action.type === "toggle") {
        return {
            showCounter: !state.showCounter, // we are setting it this way the opposite it was, so if it was true we are setting it false, and vica versa
            counter:state.counter
        };
    }

    return state;


};

const store = createStore(reducer);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

export default store;