import {createSlice} from '@reduxjs/toolkit';
import {StoreT} from 'index';
import {createSlice} from './index';
import { reset as globalReset } from './actions';

const CounterSlice = createSlice({
    name:'count',
    initialState,
    reducers:{
        increment: (state)=> state +1,
        decrement:(state)=> state >0? state-1:state),
        reset:() => 0,
    },
    extraReducers:{
        [globalReset.type]:()=>{
            return initialState;
        },
    },
});

export const {increment,decrement,reset} =counterSlice.actions;

export const counterSelctor =(state:StoreT)=> state.count;

export default counterSlice.reducer;

