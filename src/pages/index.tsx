import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sliceCounter } from "@/redux/slices";

const inter = Inter({ subsets: ["latin"] });

type TStore = {
	counter: number;
};

export default function Home() {
	const counter = useSelector<TStore>((store) => store.counter);
	const dispatch = useDispatch();

	const onIncrement = () => {
		dispatch(sliceCounter.actions.increment());
	};

	const onDecrement = () => {
		dispatch(sliceCounter.actions.decrement());
	};

	return (
		<>
			<h1>My Counter</h1>
			<h5>9/10 Bouncers like this</h5>
			<div>
				<input type="text" />
				<button onClick={onIncrement}>+</button>
				<button onClick={onDecrement}>-</button>
				<p>message</p>
			</div>
			{/* @ts-ignore */} {/* TODO : figure this out */}
			<h3>Total: {counter}</h3>
		</>
	);
}
