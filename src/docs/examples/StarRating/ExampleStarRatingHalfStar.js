import React from 'react';
import StarRating from 'zs-react/StarRating';
/** StarRating: Half star 3.5 rating */
export default class ExampleStarRatingFull extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        rating:3.5
      }
  }
  handleChange = (newRating) => {
    alert(newRating);
    this.setState({
        rating: newRating
    })
  }

  render() {
    var rating = this.state.rating;
     return <StarRating count={5} size={24} value={rating}  colorActive={'#ffd700'}
        onChange = {this.handleChange} />
  }
}
