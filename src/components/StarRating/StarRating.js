import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
 
/** A simple StarRating wrapper. */
function StarRating(props) {
  var {count,size,colorActive,half,edit,value,onChange} = props;
  return <ReactStars count={count} onChange = {onChange} 
        size={size}
        value={value}
        color2={colorActive}
        half={half}
        edit={edit}
    />;
}
StarRating.propTypes = {
  /** How many total stars yo want.  Default 5 */
  count: PropTypes.number,

  /** Will be invoked any time the rating is changed. */
  onChange: PropTypes.func,

  /** Size of stars (in px).  Default 15px */
  size: PropTypes.number,

  /** Color of inactive star (this supports any CSS valid value) */
  colorInactive: PropTypes.string,

  /** Color of selected or active star */
  colorActive:  PropTypes.string,

  /** Should component use half stars, if not the decimal part will be dropped 
   * otherwise normal algebra rules will apply to round to half stars */
  half:  PropTypes.bool,

  /** Which character you want to use as star */
  char: PropTypes.string,

  /** The current value of rating */
  value: PropTypes.number,

  /** Should you be able to select rating or just see rating */
  edit: PropTypes.bool
};

export default StarRating;
