import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import ProductSliceReducer from './Slices/ProductSlice'
import CartReducer from './Slices/CartSlice'
import OrderReducer from './Slices/OrderSlice'
const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        product:ProductSliceReducer ,
        cart:CartReducer,
        order:OrderReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),

});

export default store;