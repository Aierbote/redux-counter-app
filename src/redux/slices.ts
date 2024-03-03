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
				return state;
			} else {
				return state - action.payload;
			}
		},
	},
});

export const sliceInputValue = createSlice({
	name: "inputValue",
	initialState: 0,
	reducers: {
		setInputValue: (state, action) => {
			return action.payload;
		},
	},
});

export const sliceErrorSubtraction = createSlice({
	name: "errorSubtraction",
	initialState: false,
	reducers: {
		setErrorSubtraction: (state, action) => {
			return action.payload;
		},
	},
});
