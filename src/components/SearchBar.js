import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SearchBar = ({loaddingRequest, onSearchInputChanges, handleSearch}) => (
	<form onSubmit={handleSearch}>
		<TextField
			autoFocus
			hintText="Type a github username... Ex: clovisdasilvaneto"
			fullWidth={true}
			id="text-field-controlled"
			disabled={loaddingRequest}
			onChange={onSearchInputChanges}
		/>
		<RaisedButton type="submit" label="Search github user" fullWidth={true}/>
		<br/>
		<br/>
	</form>
)

SearchBar.propTypes = {
	loaddingRequest: PropTypes.bool,
	onSearchInputChanges: PropTypes.func.isRequired,
	handleSearch: PropTypes.func.isRequired
};

export default SearchBar;