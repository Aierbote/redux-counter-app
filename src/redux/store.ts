import { configureStore } from "@reduxjs/toolkit";
import { sliceCounter } from "./slices";

export const store = configureStore({
	reducer: {
		counter: sliceCounter.reducer,
	},
});
