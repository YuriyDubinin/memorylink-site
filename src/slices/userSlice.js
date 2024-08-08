import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    info: {},
    status: 'idle',
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchUserInfo.pending, (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(fetchUserInfo.fulfilled, (state, action) => {
    //             state.status = 'succeeded';
    //             state.info = action.payload;
    //         })
    //         .addCase(fetchUserInfo.rejected, (state, action) => {
    //             state.status = 'failed';
    //             state.info = null;
    //             state.error = action.payload.response.data;
    //         });
    // },
});

export const selectUserInfo = (state) => state.user.info;

export default userSlice.reducer;
