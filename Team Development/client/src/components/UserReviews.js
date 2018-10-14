import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserReviews extends Component {
    state = {
        reviews:
            [
                {
                    User: 'Trace@email.com',
                    Message: 'This is the message I wanted to leave'
                },
                {
                    User: 'Chris@email.com',
                    Message: 'This is the message I wanted to leave'
                },
                {
                    User: 'Dan@email.com',
                    Message: 'This is the message I wanted to leave'
                },

            ]
    }



render()
{

    return (
        <div>
            <h1>User Reviews</h1>
        </div>
    );
}
}

UserReviews.propTypes = {};

export default UserReviews;
