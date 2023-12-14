import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./features/counter/counterslice";
import menuslice from "./features/menus/menuslice";
import registerslice from "./features/register/registerslice"

export const store = configureStore({
    reducer: {
        counter: counterslice,
        menu: menuslice,
        register: registerslice
    },
});