import { Aside } from "./components/Aside"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import "./styles.css"

export default function App() {
	return (
		<div className="pageContainer">
			<Header />
			<div className="pageContent">
				<Aside />
				<Main />
			</div>
			<Footer />
		</div>
	)
}
