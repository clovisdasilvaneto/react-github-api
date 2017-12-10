'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import UserInformations from './UserInformations/UserInformations';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Repos from '../components/Repos';
import Loadding from '../components/Loadding'

const AppContent = ({ userInfo, repos, starred, handleSearch, onSearchInputChanges, clickViewRepoAction, clickViewStarredAction, loaddingRequest })=> (
	<div>
		<NavBar />
		
		<div className="container-app">
			<SearchBar loaddingRequest={loaddingRequest} onSearchInputChanges={onSearchInputChanges} handleSearch={handleSearch} />
			
			{!!userInfo &&
				<UserInformations
					clickViewStarredAction={clickViewStarredAction}
					clickViewRepoAction={clickViewRepoAction}
					userInfo={userInfo} />
			}
			
			{!!repos.data.length && repos.status &&
				<Repos title="Repositories" iconClass="fa-book" repos={repos} />
			}
			
			{!!starred.data.length && starred.status &&
				<Repos title="Starred repos" iconClass="fa-star" repos={starred}/>
			}
		</div>
		<Loadding loaddingRequest={loaddingRequest} />
	</div>
);

AppContent.propTypes = {
	loaddingRequest: PropTypes.bool,
	userInfo: PropTypes.object,
	repos: PropTypes.object,
	starred: PropTypes.object,
	handleSearch: PropTypes.func.isRequired,
	onSearchInputChanges: PropTypes.func.isRequired,
	clickViewRepoAction: PropTypes.func.isRequired,
	clickViewStarredAction: PropTypes.func.isRequired
};

export default AppContent;