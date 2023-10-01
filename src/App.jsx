import Footer from "./components/Footer";
import LeftSideBar from "./components/LeftSideBar";
import TopMenuBar from "./components/TopMenuBar";
import ViewPage from "./components/ViewPage";

function App() {
	return (
		<div className="h-screen grid grid-cols-2 grid-rows-3">
			<TopMenuBar />
			<LeftSideBar />
			<ViewPage />
			<Footer />
		</div>
	);
}

export default App;
