import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
 
/** A simple datepicker wrapper. */
function StarRating({count = 5, onChange, size, colorActive, value=0}) {
  return <ReactStars count={count} onChange = {onChange} 
        size = {size}
        value = {value}
        colorActive = {colorActive}
    />;
}
StarRating.propTypes = {
  /** How many total stars yo want.  Default 5 */
  count: PropTypes.string.isRequired,

  /** Will be invoked any time the rating is changed. */
  onChange: PropTypes.string.isRequired,

  /** Size of stars (in px).  Default 15px */
  size: PropTypes.string,

  /** Color of inactive star (this supports any CSS valid value) */
  colorInactive: PropTypes.string,

  /** Color of selected or active star */
  colorActive:  PropTypes.string,

  /** Should component use half stars, if not the decimal part will be dropped 
   * otherwise normal algebra rules will apply to round to half stars */
  half:  PropTypes.boolean,

  /** Which character you want to use as star */
  char: PropTypes.string,

  /** The current value of rating */
  value: PropTypes.number
};

export default StarRating;
