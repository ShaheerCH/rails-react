import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_ALL = 'message/GET_ALL';
const initialState = [];

export const fetchAllMessages = createAsyncThunk(
	GET_ALL,
	async (all, thunkAPI) => {
		const response = await fetch('api/v1/messages/')
		response.data = await response.json()

		return response.data
	}
);

const messagesSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAllMessages.fulfilled]: (state, action) => {
			return action.payload.message
		}
	}
});


export default messagesSlice.reducer