import React from 'react';
import StarRating from 'zs-react/StarRating';
/** StarRating: Blue Color */
export default class ExampleStarRatingFull extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        rating: 2
      }
  }
  handleChange = (newRating) => {
    this.setState({
        rating: newRating
    })
  }
  render() {
     var rating = this.state.rating;
     return <StarRating count={5}  value={rating} colorActive={'blue'}
        onChange = {this.handleChange} />
  }
}
