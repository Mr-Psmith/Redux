import {createStore} from "redux"; //or we can import {createStore} exactly
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true}; //easier to read

const counterSlice = createSlice({
    name: "counter", //every slice needs a name(whateverWeWant) as identifier of that piece of state.
    initialState: initialState, // mandatory as well, but we could just write initialState as this is th same in modern Js
    reducers: { //Reducer is an object - a map you could say, of all the reducers this state slice needs.
        increment(state) { //These methods will be called for you by Redux, and they will receive the current state. Also to the action, but actually here we don't need the action because these methods will automatically be called for you
            state.counter++;                    //depending on which action was triggered. So we don't need to write our own if checks anymore instead we'll be able to identify these different reducers and dispatch actions that target these different reducers.
        },          //This seems to be mutating the state, but it is not, bec when using Redux toolkit and its functions like create slice, we can't accidentally manipulate the existing state. 
        decrement(state) {          //Because Redux toolkit internally uses another package, called imgur, which will detect code like this and which will automatically clone the existing state, create a new state object, keep all the state which we're not editing, and override the state which we are editing in an immutable way.
            state.decrement--;
        },             
        increase(state, action) { //But now here if we need some data that's attached to the action, then we can still accept it as a parameter and use it in the reducer function in the reducer method.
            state.counter = state.counter + action.amount; 
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// const reducer = (state = initialState, action) => {

//     if (action.type === "increment") {
//         return{
//         counter: state.counter +1,
//         showCounter: state.showCounter // have to set it, so we set to the value we currently having
//         };
//     }
//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.valueProp,
//             showCounter: state.showCounter
//     }
//     }

//     if (action.type === "decrement") {
//         return{
//         counter: state.counter -1,
//         showCounter: state.showCounter
//         };
//     }

//     if (action.type === "toggle") {
//         return {
//             showCounter: !state.showCounter, // we are setting it this way the opposite it was, so if it was true we are setting it false, and vica versa
//             counter:state.counter
//         };
//     }

//     return state;


// };

//const store = createStore(counterSlice.reducer); //This would be good this way for a smaller app.
//But if we have a bigger app with multiple stateslices, than we would have a problem as there can be only one reducer passed to create store
const store = configureStore({ //we pass a configuration obj, - which is expected. And then we set a reducer property => expected property by configureStore.
    reducer: counterSlice.reducer // if we would have multiple state slices (bigger app), we would sert an obj with any keys of our choice and the values of those properties would then be different reducer functions.
                                        //So we would create a map of reducers you could say, and this map is then set as a value for the main reducer and behind the scenes configureStore will emerge all those reducers into one big reducer. So it will merge them for us.
}); 

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

export default store;