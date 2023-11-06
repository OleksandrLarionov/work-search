import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourites from './components/Favourites';
import YourFavorites from './components/YourFavorites';

function App() {
	return (
		<BrowserRouter>
			<YourFavorites />
			<Routes>
				<Route path='/' element={<MainSearch />} />
				<Route path='/favorites' element={<Favourites />}></Route>
				<Route path='/:company' element={<CompanySearchResults />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
