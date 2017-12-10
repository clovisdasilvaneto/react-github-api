import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const NavBar = () => (
	<AppBar
		title="Github User Informations"
		iconClassNameRight="fa fa-github"
		onRightIconButtonClick={()=>location.href="http://github.com/clovisdasilvaneto/github-app"}
	/>
);

export default NavBar;