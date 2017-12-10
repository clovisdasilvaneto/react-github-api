import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';

import "./UserInformations.scss";

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const UserInformations = ({ userInfo, clickViewRepoAction, clickViewStarredAction }) => (
	<section className="user-section">
		<Card className="user-card-figure">
			<CardMedia>
				<img src={userInfo.avatar_url} alt="" />
			</CardMedia>
			{userInfo.name && userInfo.company &&
				<CardTitle title={userInfo.name} subtitle={
					<FontIcon className="fa fa-id-badge user-small-text"> {userInfo.company}</FontIcon>
				} />
			}
		</Card>
		<Card className="user-card-info">
			<CardText>
				<FontIcon className="fa fa-book user-small-text" /> Repositories: {userInfo.public_repos}
				<FontIcon className="fa fa-users user-small-text mg-left" /> Followers: {userInfo.followers}
			</CardText>
			
			<CardText>
				"{userInfo.bio ? userInfo.bio : 'no biography informed'}"
			</CardText>
			<CardActions className="center-content">
				<FlatButton
					className="user-repositories"
					backgroundColor="rgb(0, 200, 212)"
					hoverColor="rgb(0, 188, 212)"
					label="View some repositories"
					onClick={clickViewRepoAction}
					icon={<FontIcon className="fa fa-book" color={fullWhite} />} />
			</CardActions>
			<CardActions className="center-content">
				<FlatButton
					className="user-repositories"
					backgroundColor="#ff9900c2"
					hoverColor="#f90"
					label="view starred repositories"
					onClick={clickViewStarredAction}
					icon={<FontIcon className="fa fa-star" color={fullWhite} />} />
			</CardActions>
			<CardActions className="center-content">
				<RaisedButton
					className="user-repositories"
					href={`http://github.com/${userInfo.login}`}
					label="View profile"
					icon={<FontIcon className="fa fa-github" />} />
			</CardActions>
		</Card>
	</section>
);

UserInformations.propTypes = {
	userInfo: PropTypes.shape({
		login: PropTypes.string.isRequired,
		avatar_url: PropTypes.string.isRequired,
		name: PropTypes.string || PropTypes.bool,
		company: PropTypes.string || PropTypes.bool,
		public_repos: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
		bio: PropTypes.string || PropTypes.boolean,
	}),
	clickViewRepoAction: PropTypes.func.isRequired,
	clickViewStarredAction: PropTypes.func.isRequired
};

export default UserInformations;