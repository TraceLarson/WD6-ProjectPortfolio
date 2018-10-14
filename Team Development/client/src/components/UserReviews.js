import React, {Component} from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'
// import PropTypes from 'prop-types';
import Review from "./Review";

class UserReviews extends Component {
    state = {
        modal: false,
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

    toggle = () => {
        console.log('clicked toggle');

        this.setState({
            modal: !this.state.modal
        })
    }


    render() {
        console.log(`Render method: modal state: ${this.state.modal}`)
        const reviewList = this.state.reviews.map(review => {
            return (
                <Review key={review._id} _id={review._id} user={review.user} message={review.message}/>
            )
        })
        return (
            <div>
                <button className={'btn btn-primary'} onClick={this.toggle} >Add Review</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={this.toggle}>Do Something</button>{' '}
                        <button className="btn btn-secondary" onClick={this.toggle}>Cancel</button>
                    </ModalFooter>
                </Modal>
                <div>
                    {reviewList}
                </div>

            </div>

        );
    }
}

// UserReviews.propTypes = {};

export default UserReviews;
