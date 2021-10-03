import { createSlice, configureStore } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: (state) => {
            state.value += 1
        },
        decremented: (state) => {
            state.value -= 1
        },
    },
})

export const { incremented, decremented } = counterSlice.actions

export const store = configureStore({
    reducer: counterSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>
