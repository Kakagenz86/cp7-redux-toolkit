import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRegister = createAsyncThunk("auth/getRegister", async (payload) => {
    try {
        const response = await axios.post(`https://api.mudoapi.tech/register`, payload);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        // console.log(error);
        throw Error (error.response.data)
    }
});

const initialState = {
    loading: false,
    error: null,
    success: ''
};

const registerSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRegister.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getRegister.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action?.payload?.message
        });
        builder.addCase(getRegister.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.error?.message;
        });
    },
});

export default registerSlice.reducer;
