import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sliceCounter, sliceInputValue } from "@/redux/slices";

const inter = Inter({ subsets: ["latin"] });

type TStore = {
	counter: number;
	inputValue: number;
};

export default function Home() {
	const counter = useSelector((store: TStore) => store.counter);
	const inputValue = useSelector((store: TStore) => store.inputValue);
	const dispatch = useDispatch();

	const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(
			// DEBUG :
			`changing value, resetting value to ${event.target.value || 0}`
		);
		dispatch(
			sliceInputValue.actions.setInputValue(parseInt(event.target.value) || 0)
		);
	};

	const onDone = () => {
		// DEBUG :
		console.log("done the math, resetting value");
		dispatch(sliceInputValue.actions.setInputValue(0));
	};

	const onIncrement = () => {
		dispatch(sliceCounter.actions.increment(inputValue));
	};

	const onDecrement = () => {
		dispatch(sliceCounter.actions.decrement(inputValue));
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
				/>
				<button
					onClick={(event) => {
						onIncrement();
						onDone();
					}}
				>
					➕
				</button>
				<button
					onClick={(event) => {
						onDecrement();
						onDone();
					}}
				>
					➖
				</button>
				<p>message</p>
			</div>
			<h3>Total: {counter}</h3>
		</>
	);
}
