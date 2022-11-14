import { MainView } from './views/main/main.view';
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
	return (
		<Provider store={store}>
			<div style={{ width: '100vw', height: '100vh' }}>
				<MainView />
			</div>
		</Provider>
	);
}

export default App;
