import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            id: 1,
            name: "ayla",
        },
        {
            id: 2,
            name: "agya",
        },
        {
            id: 3,
            name: "honda",
        }
    ]
}

const menuSlice = createSlice ({
    name: "menu",
    initialState,
    reducers: {}
})

export default menuSlice.reducer