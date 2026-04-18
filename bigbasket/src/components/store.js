
import { configureStore } from "@reduxjs/toolkit";
import myCartSlicer from "./cartslicer.js"

const store=configureStore({

    reducer:{
        cart:myCartSlicer

    }

})

export default store