import React from 'react';
import PropTypes from 'prop-types'

const Review = props => {
        return (
            <div>
                <h1>This is a review</h1>
            </div>
        );
}

Review.propTypes = {
    _id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}

export default Review
