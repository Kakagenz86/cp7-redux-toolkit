import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./features/counter/counterslice";
import menuslice from "./features/menus/menuslice";

export const store = configureStore({
    reducer: {
        counter: counterslice,
        menu: menuslice
    },
});