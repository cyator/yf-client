import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { useAuth0 } from '@auth0/auth0-react';

function PublicAuthLinks() {
	const { loginWithRedirect } = useAuth0();
	return (
		<>
			<NavItem>
				<NavLink
					href="#"
					onClick={() =>
						loginWithRedirect({
							screen_hint: 'signup',
						})
					}
				>
					Register
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="#" onClick={() => loginWithRedirect()}>
					Login
				</NavLink>
			</NavItem>
		</>
	);
}

export default PublicAuthLinks;
