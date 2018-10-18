import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Stripe from 'stripe'

class Checkout extends Component {


	state = {
		errors: 'hidden',
		button: false,
		name: '',
		address: '',
		card_name: '',
		card_number: '',
		card_expiry_month: '',
		card_expiry_year: '',
		card_cvc: '',

	}

	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.setState({
			// button: !this.state.button
		})
		// Stripe.card.createToken({
		// 	number: this.state.card_number,
		// 	cvc: this.state.card_cvc,
		// 	exp_month: this.state.card_expiry_month,
		// 	exp_year: this.state.card_expiry_year,
		// 	name: this.state.name
		// })

	}




	render() {
		const {cartTotal} = this.props.match.params
		return (
			<div className={'row'}>
				<div className={'col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3'}>
					<h1>Checkout</h1>
					<h4>Your Total: $ {cartTotal}</h4>
					<div id="charge-error" className={`alert alert-danger ${this.state.errors}`}>

					</div>
					<form onSubmit={this.handleSubmit} method={'POST'} id={'checkout-form'} className={'ml-5'}>
						<div className={'row'}>


							<div className={'col-xs-12'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="name">Name</label>
									<input type="text"
									       name="name"
									       id="name"
									       className="form-control"
									       value={this.state.name}
									       onChange={this.handleChange}
									       aria-describedby="helpId"
									       required={false}
									/>
									<small id="helpId" className="text-muted">Your full name.</small>
								</div>
							</div>

							<div className={'col-xs-12'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="address">Address</label>
									<input type="text"
									       name="address"
									       id="address"
									       className="form-control"
									       value={this.state.address}
									       onChange={this.handleChange}
									       aria-describedby="helpId"
									       required={false}
									/>
									<small id="helpId" className="text-muted">Billing address associated with this
										card
									</small>
								</div>
							</div>

							<div className={'col-xs-12'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="card_name">Card Holder Name</label>
									<input type="text"
									       name="card_name"
									       id="card_name"
									       className="form-control"
									       value={this.state.card_name}
									       onChange={this.handleChange}
									       aria-describedby="helpId"
									       required={false}
									/>
									<small id="helpId" className="text-muted">Name as it appears on your credit card
									</small>
								</div>
							</div>

							<div className={'col-xs-12'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="card_number">Credit Card Number</label>
									<input type="text"
									       name="card_number"
									       id="card_number"
									       className="form-control"
									       value={this.state.card_number}
									       onChange={this.handleChange}
									       aria-describedby="helpId"
									       required={false}
									/>
									<small id="helpId" className="text-muted">16 digit number on front of card</small>
								</div>
							</div>

							<div className={'col-xs-4'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="card_expiry_month">Expiration Month</label>
									<input type="text"
									       name="card_expiry_month"
									       id="card_expiry_month"
									       className="form-control"
									       value={this.state.card_expiry_month}
									       onChange={this.handleChange}
									       aria-describedby="helpId"
									       required={false}
									/>
									<small id="helpId" className="text-muted">MM</small>
								</div>
							</div>

							<div className={'col-xs-4'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="card_expiry_year">Expiration Year</label>
									<input type="text"
									       name="card_expiry_year"
									       id="card_expiry_year"
									       className="form-control"
									       value={this.state.card_expiry_year}
									       onChange={this.handleChange}
									       aria-describedby="helpId"
									       required={false}
									/>
									<small id="helpId" className="text-muted">YY</small>
								</div>
							</div>

							<div className={'col-xs-4'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="card_cvc">CVC</label>
									<input type="text"
									       name="card_cvc"
									       id="card_cvc"
									       className="form-control"
									       value={this.state.card_cvc}
									       onChange={this.handleChange}
									       aria-describedby="helpId"
									       required={false}
									/>
									<small id="helpId" className="text-muted">3 Digit code on back of card</small>
								</div>
							</div>

							<div className="col-xs-4">
								<button type={'submit'} className={`btn btn-success`} disabled={this.state.button}>Buy Now</button>
							</div>

						</div>
					</form>
				</div>
			</div>
		)
	}
}

Checkout.propTypes = {
	cartTotal: PropTypes.string
};

export default Checkout;
