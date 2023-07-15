import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Actually from "./components/pages/Actually/Actually";
import News from "./components/pages/News/News";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Actually />
				<News />
			</main>
			<Footer />
		</div>
	);
}

export default App;
