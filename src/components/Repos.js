import React  from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

const Repos = ({ title, iconClass, repos })=> (
	<List>
		<Subheader>
			<FlatButton
				label={title}
				disabled={true}
				icon={<FontIcon className={`fa ${ iconClass }`} />} />
		</Subheader>
		
		{repos.data.map((repo, index)=> (
			<div key={index}>
				<ListItem
					onClick={()=> location.href=repo.link}
					primaryText={repo.name}
					secondaryText={repo.description}
				/>
				
				<Divider />
			</div>
		))}
	</List>
);

Repos.defaultProps = {
	iconClass: '',
	repos: {
		data: [],
		status: false
	},
};

Repos.propTypes = {
	iconClass: PropTypes.string,
	title: PropTypes.string.isRequired,
	repos: PropTypes.shape({
		data: PropTypes.array,
		status: PropTypes.boolean
	}),
};

export default Repos;