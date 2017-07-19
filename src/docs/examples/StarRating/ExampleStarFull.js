import React from 'react';
import StarRating from 'zs-react/StarRating';
/** StarRating Example.  Click to change rating */
export default class ExampleStarRatingFull extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
         rating: 5
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
