import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './components/Home/Game/Game';
import Home from './components/Home/Home';
import Leaderboards from './components/Leaderboards/Leaderboards';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/:gameType'
					element={<Game />}
				/>
				<Route
					path='/Leaderboards'
					element={<Leaderboards />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
