import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './components/Home/Home';
import Info from './components/Info/Info';
import Leaderboards from './components/Leaderboards/Leaderboards';
import Nav from './components/Nav/Nav';
function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route
					path='/'
					element={<Game />}
				/>
				<Route
					path='/Leaderboards'
					element={<Leaderboards />}
				/>
				<Route
					path='/Info'
					element={<Info />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
