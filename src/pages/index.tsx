import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
	sliceCounter,
	sliceErrorSubtraction,
	sliceInputValue,
} from "@/redux/slices";

const inter = Inter({ subsets: ["latin"] });

export type TStore = {
	counter: number;
	inputValue: number;
	errorSubtraction: boolean;
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
		<>
			<h1>⌘ My Counter</h1>
			<h5>9/10 Bouncers like this</h5>
			<div>
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
				<p>message: {!errorSubtraction ? "ok" : "Exceeding the limit"}</p>
			</div>
			<h3>Total: {counter}</h3>
		</>
	);
}
