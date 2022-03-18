import axios from 'axios';
import { Store } from '../app/store';

const instance = axios.create();

instance.defaults.baseURL = process.env.REACT_APP_BASE_URL;
instance.defaults.withCredentials = true;

export const interceptor = (store: Store) => {
	instance.interceptors.request.use((request) => {
		if (
			request.method === 'POST' ||
			request.method === 'PATCH' ||
			request.method === 'PUT'
		) {
			request.headers['Content-Type'] = 'application/json;charset=utf-8';
		}

		const { token } = store.getState()?.auth;
		if (token) {
			request.headers.Authorization = `Bearer ${token}`;
		}
		return request;
	});
};

export default instance;
