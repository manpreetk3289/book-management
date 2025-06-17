//Interview Questions:

import { Component } from "react";

/**
React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for creating UI component-based user interfaces.
**/


class Counter extends Component{}


const mapDispatchToProp =(dispatch)=>{

    return{

        handlefn1 : state.increat
    }
}

const mapStateToProps =(state)=>{
    return{

        counter: state.counter
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Counter);

///

import {createSlice} from '@reduxjs/toolkit';

const counteSlice = createSlice({

    name:'counter',
    initialState,
    reducer:{
        increament(state){
            state.counter++;
        }
        decrement(state){
            state.coounter --
        }
        increase(state, action){
            state.counter+action.amount;
        }
    }
})

import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        counter: counterSlice.reducer
    }
})