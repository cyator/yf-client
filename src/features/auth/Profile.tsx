import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import { useAuth0 } from '@auth0/auth0-react';
import PageTitle from '../misc/PageTitle';

function Profile() {
	const [isSubscribed] = useState(false);
	const { user } = useAuth0();

	return (
		<>
			<PageTitle name="Profile" />

			<Card>
				<CardHeader className="font-weight-bold">
					Personal information
				</CardHeader>
				<CardBody>
					<div className="d-flex justify-content-between align-items-center">
						<div>Username: {user?.nickname}</div>
					</div>

					<div>First name: {user?.given_name}</div>
					<div>Last name: {user?.family_name}</div>
					<div className="d-flex justify-content-between align-items-center">
						<div>Email: {user?.email}</div>
					</div>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="font-weight-bold">Newsletter</CardHeader>
				<CardBody>
					{
						<div className="d-flex justify-content-between align-items-center">
							<span>
								{isSubscribed === true
									? 'You are subscribed to our newsletter'
									: 'You are not subscribed to our newsletter'}
							</span>
							<Button color="primary">
								{isSubscribed === true ? 'Unsubscribe' : 'Subscribe'}
							</Button>
						</div>
					}
				</CardBody>
			</Card>
		</>
	);
}

export default Profile;
