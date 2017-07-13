import React from 'react';
import PropTypes from 'prop-types';

/** A super simple Accordion component. */

class Pane extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        show: this.props.data.showOnLoad
      }
    
      this.toggle = this.toggle.bind(this);
    }
  
  toggle(){
    this.setState({
      show: !this.state.show
    });
  }

  render(){
    var getContent = (function(item){
      return this.state.show ? (
        <div className="accordion-content">
          {item.content}
        </div>
      ) : '';
    }).bind(this);

    var item = this.props.data;

    return (
      <div>
        <div className="accordion-header" onClick={this.toggle}>
          {item.name}
        </div>
        { getContent(item) }
      </div>
    );
  }
}

class Accordion extends React.Component { 
  render(){
    var panes = [];
    var data = this.props.data || [];

    data.forEach(function(item, index){
      panes.push(
        <Pane data={item} key={index}/>
      );
    });

    return (
      <div className="accordion">
        {panes}
      </div>
    );
  }
}
Accordion.propTypes = {
  /** Message to display */
  data: PropTypes.array
};

Accordion.defaultProps = {
  data: []
};

export default Accordion;