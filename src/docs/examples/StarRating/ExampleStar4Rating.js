import React from 'react';
import StarRating from 'zs-react/StarRating';
/** StarRating: Default rating 4 */
export default class ExampleStarRatingFull extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        rating: 4
      }
  }
  handleChange = (newRating) => {
    this.setState({
        rating: newRating
    })
  }

  render() {
    var rating = this.state.rating;
     return <StarRating count={5} size={24} value={rating} colorActive={'#ffd700'}
        onChange = {this.handleChange} />
  }
}
