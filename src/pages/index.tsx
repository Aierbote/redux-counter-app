import { Inter, Roboto_Flex } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import {
	sliceCounter,
	sliceErrorSubtraction,
	sliceInputValue,
} from "@/redux/slices";
import { Box, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export type TStore = {
	counter: number;
	inputValue: number;
	errorSubtraction: boolean;
};

const wrapperStyle = {
	p: 4,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	bgcolor: "green",
	height: "40vh",
	width: "40vw",
	borderRadius: ".625rem",
};

const boxStyle = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	px: 5,
	py: 2,
	height: { xs: "300px", md: "200px" },
	width: { xs: "300px", md: "200px" },
};

export default function Home() {
	const counter = useSelector((store: TStore) => store.counter);
	const inputValue = useSelector((store: TStore) => store.inputValue);
	const errorSubtraction = useSelector(
		(store: TStore) => store.errorSubtraction
	);
	const dispatch = useDispatch();

	const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(
			`changing value, resetting value to ${event.target.value || 0}`
		);
		dispatch(
			sliceInputValue.actions.setInputValue(parseInt(event.target.value) || 0)
		);
	};

	const onDone = () => {
		dispatch(sliceInputValue.actions.setInputValue(0));
	};

	const onIncrement = () => {
		if (errorSubtraction) {
			dispatch(sliceErrorSubtraction.actions.setErrorSubtraction(false));
		}

		dispatch(sliceCounter.actions.increment(inputValue));
	};

	const onDecrement = () => {
		const result = counter - inputValue;
		if (result < 0) {
			dispatch(sliceErrorSubtraction.actions.setErrorSubtraction(true));
		} else {
			dispatch(sliceCounter.actions.decrement(inputValue));
		}
	};

	return (
		<Box sx={wrapperStyle}>
			<Typography variant="h1" sx={{ fontSize: "3.2rem" }}>
				⌘ My Counter
			</Typography>
			<Typography variant="h5">9/10 Bouncers like this</Typography>
			<Box sx={boxStyle}>
				<input
					type="number"
					placeholder="Insert number"
					value={inputValue}
					onChange={onValueChange}
					min={0}
				/>
				<button
					onClick={(event) => {
						onIncrement();
						onDone();
					}}
					disabled={!inputValue}
				>
					➕
				</button>
				<button
					onClick={(event) => {
						onDecrement();
						onDone();
					}}
					disabled={!inputValue}
				>
					➖
				</button>
				<Typography variant="body1">
					message: {!errorSubtraction ? "ok" : "Exceeding the limit"}
				</Typography>
			</Box>
			<Typography variant="h4">Total: {counter}</Typography>
		</Box>
	);
}
