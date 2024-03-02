import { createSlice } from "@reduxjs/toolkit";

export const sliceCounter = createSlice({
	name: "counter",
	initialState: 0,
	reducers: {
		increment: (state, action) => {
			return state + action.payload;
		},
		decrement: (state, action) => {
			if (state - action.payload < 0) {
				return 0;
			} else {
				return state - action.payload;
			}
		},
	},
});
