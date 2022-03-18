import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Spinner } from 'reactstrap';

const ProtectedRoute = ({ component, ...args }: any) => (
	<Route
		component={withAuthenticationRequired(component, {
			onRedirecting: () => (
				<div className="d-flex justify-content-center py-5">
					<Spinner />
				</div>
			),
		})}
		{...args}
	/>
);

export default ProtectedRoute;
