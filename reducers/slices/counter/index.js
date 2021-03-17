import { createSlice } from '@reduxjs/toolkit';

export const index = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
});

export const { increment, decrement, incrementByAmount, reset } = index.actions;

export default index.reducer;