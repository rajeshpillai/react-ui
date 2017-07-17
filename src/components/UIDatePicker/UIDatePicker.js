import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import  './uidatepicker.css';
 
/** A simple datepicker wrapper. */
function UIDatePicker({selected, onChange}) {
  return <DatePicker selected={selected} onChange = {onChange}
    />;
}
export default UIDatePicker;
