import React from 'react';
import PropTypes from 'prop-types';
import './iconbutton.css';

function IconButton({icon, location, onClick, children }) {
    return (
        <button onClick= {onClick}>
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
  location: PropTypes.string,

  /** The click handler for the button */
  onClick: PropTypes.func
};

IconButton.defaultProps = {
    location: 'left'
};

export default IconButton;