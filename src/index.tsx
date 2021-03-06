import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { interceptor } from './config/axios';
import Auth0ProviderWithHistory from './features/auth/Auth0ProviderWithHistory';

//redux perist
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
let persistor = persistStore(store);

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Auth0ProviderWithHistory>
						<App />
					</Auth0ProviderWithHistory>
				</PersistGate>
			</Provider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

interceptor(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
