import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Checkout extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<form>
						<div className="form-group row">
							<label for="inputName" className="col-sm-1-12 col-form-label"></label>
							<div className="col-sm-1-12">
								<input
									type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week"
									className="form-control" name="inputName" id="inputName" placeholder=""/>
							</div>
						</div>
						<fieldset className="form-group row">
							<legend className="col-form-legend col-sm-1-12">Group name</legend>
							<div className="col-sm-1-12">

							</div>
						</fieldset>
						<div className="form-group row">
							<div className="offset-sm-2 col-sm-10">
								<button type="submit" className="btn btn-primary">Action</button>
							</div>
						</div>
					</form>
				</div>
			</div>
	);
	}
	}

	Checkout.propTypes = {};

	export default Checkout;
