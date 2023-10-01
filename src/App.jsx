import Footer from "./components/Footer";
import LeftSideBar from "./components/LeftSideBar";
import TopMenuBar from "./components/TopMenuBar";
import ViewPage from "./components/ViewPage";

function App() {
	return (
		<div className="h-screen grid grid-cols-g-t-c-2 grid-rows-g-t-r-3 ">
			<TopMenuBar />
			<LeftSideBar />
			<ViewPage />
			<Footer />
		</div>
	);
}

export default App;
