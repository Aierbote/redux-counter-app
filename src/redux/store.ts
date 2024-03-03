import { configureStore } from "@reduxjs/toolkit";
import { sliceCounter, sliceInputValue } from "./slices";

export const store = configureStore({
	reducer: {
		counter: sliceCounter.reducer,
		inputValue: sliceInputValue.reducer,
	},
});
