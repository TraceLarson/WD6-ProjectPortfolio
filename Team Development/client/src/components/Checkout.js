import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Checkout extends Component {
	render() {
		return (
			<div className={'row'}>
				<div className={'col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3'}>
					<h1>Checkout</h1>
					<h4>Your Total: $</h4>
					<form action="/" action={'POST'} id={'checkout-form'} className={'ml-5'}>
						<div className={'row'}>


							<div className={'col-xs-12'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="name">Name</label>
									<input type="text"
									       name="name"
									       id="name"
									       className="form-control"
									       aria-describedby="helpId"
									       required={true}
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
									       aria-describedby="helpId"
									       required={true}
									/>
									<small id="helpId" className="text-muted">Billing address associated with this card</small>
								</div>
							</div>

							<div className={'col-xs-12'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="card-name">Card Holder Name</label>
									<input type="text"
									       name="card-name"
									       id="card-name"
									       className="form-control"
									       aria-describedby="helpId"
									       required={true}
									/>
									<small id="helpId" className="text-muted">Name as it appears on your credit card</small>
								</div>
							</div>

							<div className={'col-xs-12'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="card-number">Credit Card Number</label>
									<input type="text"
									       name="card-number"
									       id="card-number"
									       className="form-control"
									       aria-describedby="helpId"
									       required={true}
									/>
									<small id="helpId" className="text-muted">16 digit number on front of card</small>
								</div>
							</div>

							<div className={'col-xs-12'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="card-expiry-month">Expiration Month</label>
									<input type="text"
									       name="card-expiry-month"
									       id="card-expiry-month"
									       className="form-control"
									       aria-describedby="helpId"
									       required={true}
									/>
									<small id="helpId" className="text-muted">MM</small>
								</div>
							</div>

							<div className={'col-xs-12'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="card-expiry-year">Expiration Year</label>
									<input type="text"
									       name="card-expiry-year"
									       id="card-expiry-year"
									       className="form-control"
									       aria-describedby="helpId"
									       required={true}
									/>
									<small id="helpId" className="text-muted">YY</small>
								</div>
							</div>

							<div className={'col-xs-12'}>
								<div className="form-group">
									<label className={'badge'} htmlFor="card-cvc">CVC</label>
									<input type="text"
									       name="card-cvc"
									       id="card-cvc"
									       className="form-control"
									       aria-describedby="helpId"
									       required={true}
									/>
									<small id="helpId" className="text-muted">3 Digit code on back of card</small>
								</div>
							</div>

						</div>
					</form>
				</div>
			</div>
		)
	}
}

Checkout.propTypes = {};

export default Checkout;
