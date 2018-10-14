import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Review from "./Review";

class UserReviews extends Component {
    state = {
        reviews:
            [
                {
                    _id: 0,
                    user: 'Trace@email.com',
                    message: 'This is the message I wanted to leave'
                },
                {
                    _id: 1,
                    user: 'Chris@email.com',
                    message: 'This is the message I wanted to leave'
                },
                {
                    _id: 2,
                    user: 'Dan@email.com',
                    message: 'This is the message I wanted to leave'
                },

            ]
    }


    render() {
        const reviewList = this.state.reviews.map(review => {
            return (
                <Review key={review._id} _id={review._id} user={review.user} message={review.message}/>
            )
        })
        return (
            <div className={'container'}>
                {reviewList}
            </div>
        );
    }
}

// UserReviews.propTypes = {};

export default UserReviews;
