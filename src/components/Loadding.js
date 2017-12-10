import React from 'react';
import PropTypes from 'prop-types';

const Loadding = ({loaddingRequest}) => (
	<div className={`loadding ${loaddingRequest ? 'open' : 'close'}`}>
		<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
	</div>
);

Loadding.propTypes = {
	loaddingRequest: PropTypes.bool
};

export default Loadding;