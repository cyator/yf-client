import React from 'react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button,
	NavItem,
	NavLink,
} from 'reactstrap';

import { useAuth0 } from '@auth0/auth0-react';

function ProtectedAuthLinks() {
	const { user, logout } = useAuth0();

	return (
		<>
			<UncontrolledDropdown nav inNavbar className="d-none d-md-block pb-0">
				<DropdownToggle nav caret>
					{user?.nickname ? user?.nickname : 'Account'}
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem tag={Link} to="/profile">
						Profile
					</DropdownItem>
					<DropdownItem tag={Link} to="/orders">
						Orders
					</DropdownItem>
					<DropdownItem tag={Link} to="/favorites">
						Favorites
					</DropdownItem>
					<DropdownItem tag={Link} to="/addresses">
						Addresses
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem tag={'div'}>
						<Button
							className="w-100"
							onClick={() => logout({ returnTo: window.location.origin })}
						>
							Log out
						</Button>
					</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>

			<div className="d-md-none">
				<NavItem>
					<NavLink tag={RouterNavLink} to="/profile">
						Profile
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={RouterNavLink} to="/orders">
						Orders
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={RouterNavLink} to="/favorites">
						Favorites
					</NavLink>
				</NavItem>
				<hr style={{ background: 'white' }} />
				<Button
					className="w-100"
					onClick={() => logout({ returnTo: window.location.origin })}
				>
					Log out
				</Button>
			</div>
		</>
	);
}

export default ProtectedAuthLinks;
