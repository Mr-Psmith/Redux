// const redux = require("redux"); //This is how an import looks like a defalut node.js import statement for importing a third party package

// const counterReducer = (state = { counter: 0 }, action) => { //recieves state, and action by default, as state is the old state, action is the action by which it will do something =>Lecture264
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1 //the existing +1
//         };
//     }
//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1 //the existing +1
//         };
//     }
    

//     return state; //so if the inccrement type state is the action than increment if not, than the default
    
// }; 

// const store = redux.createStore(counterReducer); // =>should manage some data, determined by the reducer function, because it's the reducer function which will produce new state snapshots.

// const counterSubscriber = () => {
//     const latestState = store.getState();
//     console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
