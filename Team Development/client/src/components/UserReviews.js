import React, {Component} from 'react';
import {
	Button,
	Modal,
} from 'react-bootstrap'
import axios from 'axios'
import PropTypes from 'prop-types';
import Review from "./Review";

// TODO:  get current user email address from auth and change hardCoded currentUser

class UserReviews extends Component {
	state = {
		show: false,
		currentUser: 'Anonymous',
		message: '',
		reviews:
			[
				{
					_id: '0',
					user: 'Admin@GameDrop.com',
					message: '...Loading reviews'
				}
			]
	}

	componentDidMount() {
		axios.get('/user/')
			.then(response => {
				// console.log(`success componentDidMount: ${response.data.user.email}`)
				this.setState({
					currentUser: response.data.user.email
				})
			})
			.catch(err => [
				console.error(`error componentDidMount: ${err.message}`)
			])
	}

	toggle = () => {
		// console.log('clicked toggle');
		this.setState({
			show: !this.state.show
		})
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})

	}

	handleSubmit = e => {
		e.preventDefault()
		// console.log(e.target)
		axios.post('/reviews', {
			user: this.state.currentUser, //will change to props
			message: this.state.message,
			item: this.props.itemId
		})
			.then(response => {
				// console.log(response.data)
			})
			.then(() => {
				this.props.updateReviews()
				this.toggle()
				this.setState({
					message: ''
				})
			})
			.catch(err => {
				console.error(`Error POSTing new review: ${err.message}`)
			})

	}


	render() {
		const {reviews} = this.props || this.state
		const reviewList = reviews.map(review => {
			return (
				<Review key={review._id} _id={review._id} user={review.user} message={review.message}/>
			)
		})
		
		const showButton = this.state.currentUser === 'Anonymous' || !this.state.currentUser ? '' : (
			<Button bsStyle="primary" bsSize="large" onClick={this.toggle}>
				Write a review
			</Button>
		)

		return (
			<div>
				<div>
					{reviewList}
				</div>
				{showButton}
				<Modal show={this.state.show} onHide={this.toggle}>
					<Modal.Header closeButton>
						<Modal.Title>Leave a review!</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={this.handleSubmit}>
							<input className={'hidden'} type="text" name={'item'} id={'item'}
							       defaultValue={this.props.itemId}/>
							<div className={'form-group'}>
								<label htmlFor={'user'}>User</label>
								<input className={'form-control'} type="text" name={'user'} id={'user'}
								       defaultValue={this.state.currentUser}
								       disabled={true}/>
							</div>
							<div className={'form-group'}>
								<label htmlFor={'message'}>Message</label>
								<textarea className={'form-control'}
								          name={"message"}
								          id="message"
								          cols="30" rows="10"
								          value={this.state.message}
								          onChange={this.handleChange}/>
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

UserReviews.propTypes = {
	itemId: PropTypes.string.isRequired,
	reviews: PropTypes.array.isRequired,
	updateReviews: PropTypes.func.isRequired,
//  currentUser: PropTypes.string.isRequired
};

export default UserReviews;
