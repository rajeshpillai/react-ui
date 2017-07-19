import React from 'react';
import StarRating from 'zs-react/StarRating';
/** StarRating: Default rating 4 */
export default class ExampleStarRatingFull extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
      }
  }
  handleChange = (newRating) => {
    this.setState({
        rating: newRating
    })
  }

  render() {
     return <StarRating count={5} size={24} value={4} colorActive={'#ffd700'}
        onChange = {this.handleChange} />
  }
}
