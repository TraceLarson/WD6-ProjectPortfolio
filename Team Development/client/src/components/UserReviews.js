import React, {Component} from 'react';
import {
	Button,
	Modal,
} from 'react-bootstrap'
import axios from 'axios'
// import PropTypes from 'prop-types';
import Review from "./Review";

// TODO: get item _id from props, get current user email address from auth

class UserReviews extends Component {
	state = {
		currentUser: 'Trace@email.com',
		show: false,
		reviews:
			[
				{
					_id: '0',
					user: 'Trace@email.com',
					message: 'This is the message I wanted to leave'
				},
				{
					_id: '1',
					user: 'Chris@email.com',
					message: 'This is the message I wanted to leave'
				},
				{
					_id: '2',
					user: 'Dan@email.com',
					message: 'This is the message I wanted to leave'
				},

			]
	}

	componentDidMount() {
		// Axios call to get messages
		axios.get('/reviews')
			.then(response => {
				this.setState({
					reviews: response.data
				})
			})
			.catch(err => {
				console.log(`Error fetching reviews: ${err.message}`)
			})
	}

	toggle = () => {
		console.log('clicked toggle');

		this.setState({
			show: !this.state.show
		})
	}

	handleSubmit = e => {
		e.preventDefault()
	}


	render() {
		const reviewList = this.state.reviews.map(review => {
			return (
				<Review key={review._id} _id={review._id} user={review.user} message={review.message}/>
			)
		})

		return (
			<div>
				<div>
					{reviewList}
				</div>
				<Button bsStyle="primary" bsSize="large" onClick={this.toggle}>
					Write a review
				</Button>
				<Modal show={this.state.show} onHide={this.toggle}>
					<Modal.Header closeButton>
						<Modal.Title>Leave a review!</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={this.handleSubmit}>
							<div className={'form-group'}>
								<label htmlFor={'user'}>User</label>
								<input className={'form-control'} type="text" name={'user'} id={'user'} defaultValue={this.state.currentUser}
								       disabled={true}/>
							</div>
							<div className={'form-group'}>
								<label htmlFor={'message'}>Message</label>
								<textarea className={'form-control'} name={"message"} id="message" cols="30" rows="10"/>
							</div>
							<Button type={'submit'} bsStyle={'info'} bsSize={'large'}>Submit Review!</Button>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.toggle}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>

		);
	}
}

// UserReviews.propTypes = {
// 	_id: PropTypes.string.isRequired
// };

export default UserReviews;
