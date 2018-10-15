import React from 'react';
import PropTypes from 'prop-types'

const Review = props => {
        return (
            <div>
                <ul className={'list-group'}>
                    <li className={'list-group-item hidden'}>id: {props._id}</li>
                    <li className={'list-group-item'}>User: {props.user} </li>
                    <li className={'list-group-item'}>Message: <br/>{props.message}</li>
                </ul>
            </div>
        );
}

Review.propTypes = {
    _id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}

export default Review
