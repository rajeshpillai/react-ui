import React from 'react';
import PropTypes from 'prop-types';

/** Itemview: to display single item/product */
function ItemView(props) {
  var {imgUrl,header,desc} = props;
  return (
    <div className="row">
        <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src={imgUrl} alt="..."/>
                <div className="caption">
                    <h3>{header}</h3>
                    <p>{desc}</p>
                    <p>
                        <a href="#" className="btn btn-primary" role="button">Button</a> 
                        <a href="#" className="btn btn-default" role="button">Button</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

ItemView.propTypes = {
};

export default ItemView;
