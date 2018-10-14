import React from 'react';
import PropTypes from 'prop-types'

const Review = props => {
        return (
            <div>
                <ul>
                    <li>id: {props._id}</li>
                    <li>User: {props.user} </li>
                    <li>Message: <br/>{props.message}</li>
                </ul>
            </div>
        );
}

Review.propTypes = {
    _id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}

export default Review
