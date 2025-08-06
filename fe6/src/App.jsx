import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Additem from "./pages/addItem";
import Items from "./pages/items";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Routes>
				<Route path="/items" element={<Items />} />
				<Route path="/additem" element={<Additem />} />
			</Routes>
		</div>
	);
}

export default App;
