import { configureStore } from "@reduxjs/toolkit";
import listSlices from "./listSlices";
const store = configureStore({
    reducer:{
        listSlices:listSlices
    }
})  
export default store;