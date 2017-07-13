import React from 'react';
import PropTypes from 'prop-types';
import './iconbutton.css';

function IconButton({icon, location, children }) {
    return (
        <button>
            {location === "left" && <i className={icon} aria-hidden="true"/>}
            {children} 
            {location === "right" && <i className={icon} aria-hidden="true"/>}
        </button>
    );
}
IconButton.propTypes = {
  /** The icon class to display to display */
  icon: PropTypes.string,
  
  /** The location of the icon.  Valid values are "left", "right" */
  location: PropTypes.string
};

IconButton.defaultProps = {
    location: 'left'
};

export default IconButton;