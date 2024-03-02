import { createSlice } from "@reduxjs/toolkit";

export const sliceCounter = createSlice({
	name: "counter",
	initialState: 0,
	reducers: {
		increment: (state) => {
			return state + 1;
		},
		decrement: (state) => {
			if (state - 1 < 0) {
				return 0;
			} else {
				return state - 1;
			}
		},
	},
});
