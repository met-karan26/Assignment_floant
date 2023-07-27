import {configureStore} from "@reduxjs/toolkit";

import { cart } from "./slices/Cart";
const store=configureStore({
    reducer:{
       
       cart:cart.reducer,
    },
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ());

export default store;