import { createConnection } from 'net';
import React from 'react';

export type CounterConrextT = {
    count: number;
    increment:()=> void;
    decrement:()=> void;
    reset:()=>void;
} ;


export const CounterContext = React.createContext=  <CounterContext>({
    count:0,
    increment: ()=> null,
    decrement:()=> null,
    reset:()=> null,
});