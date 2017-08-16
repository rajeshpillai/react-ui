import React from 'react';
import PropTypes from 'prop-types';

const FaIcon = props => {
    var className = "fa " + props.iconName;
    return (
        <i className={className} aria-hidden="true">
            {props.children}
        </i>
    );
}

FaIcon.propTypes = {
  /** The icon class to display to display */
  iconName: PropTypes.string
};

export default FaIcon;