import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        // this will call in dispatch
        increment(state, action) {
            state.counter++
        },

        decrement(state, action) {
            state.counter--
        },
        // here we have not to defone hard coded like --> +1 values --->> (state.counter++)
        addby(state, action) {
            state.counter += action.payload
        }
    }
})
export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
})
export default store;


// counterSlice :-->> this is provide simplified configuration options and good defaults  