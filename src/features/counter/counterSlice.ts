import {
    createSlice,
    type PayloadAction,
    createAsyncThunk,
} from '@reduxjs/toolkit'

export interface CounterState {
    value: number
    status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = { value: 0, status: 'idle' }

function wait(ms: number) {
    return new Promise((res) => setTimeout(res, ms))
}

export const incrementAsync = createAsyncThunk<number, number>(
    'counter/incrementAsync',
    async (amount: number) => {
        await wait(500)
        return amount
    }
)

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1
        },
        decrement(state) {
            state.value -= 1
        },
        addByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value += action.payload
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.status = 'failed'
            })
    },
})

export const { increment, decrement, addByAmount } = counterSlice.actions
export default counterSlice.reducer
