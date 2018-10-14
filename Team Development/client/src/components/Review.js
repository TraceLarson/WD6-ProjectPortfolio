import React from 'react';
import PropTypes from 'prop-types'

const Review = props => {
        return (
            <div>

            </div>
        );
}

Review.propTypes = {
    _id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}

export default Review
