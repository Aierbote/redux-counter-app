import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Container } from "@mui/material";

const containerStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100vh",
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<Container sx={containerStyle}>
					<Component {...pageProps} />
				</Container>
			</Provider>
		</>
	);
}
