import { configureStore } from "@reduxjs/toolkit";
import OperationReducer from "./OperationSlice"
export const OperationStore=configureStore({
    reducer:{
        opReducer:OperationReducer
    }
})