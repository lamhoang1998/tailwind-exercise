import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<ProductDetails />} />
				<Route path="product" element={<ProductDetails />} />
				<Route path="cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
