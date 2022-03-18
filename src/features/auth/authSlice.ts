import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AuthState {
	token: string;
}

const initialState: AuthState = {
	token: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,

	reducers: {
		setToken: (state, { payload }: PayloadAction<string>) => {
			state.token = payload;
		},
	},
});

export const { setToken } = authSlice.actions;

export const authState = (state: RootState) => state.auth;

export default authSlice.reducer;
