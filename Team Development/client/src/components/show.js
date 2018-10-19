import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import UserReviews from './UserReviews'


class Show extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: {}
		};
	}

	componentDidMount() {
		this.getItem()
		this.props.checkGameRadar(this.props.match.params.id)
	}

	getItem = () => {
		axios.get('/item/' + this.props.match.params.id)
			.then(res => {
				this.setState({item: res.data});
				console.log(this.state.item);
			});
	}

	addToCart = (id) => {
    axios.get('/item/addToCart/'+id)
			.then(response => {
				if (!response.data.error) {
					this.props.updateCartQty({
						qty: response.data.totalQty
					})
        }
        else {
          console.log(response.data.error)
        }
			})
  }

	addToRadar = (id) => {
    axios.get('/user/addToRadar/'+id)
			.then(response => {
				if (!response.data.err) {
					console.log(response.data.user)
					this.props.checkGameRadar(this.props.match.params.id)
        }
        else {
          console.log(response.data.err)
        }
			})
  }

	updateReviews = () => {
		this.getItem()
	}

	render() {
		return (
			<div>
				<div className='details'>
					<div className='imgFrame'>
						<img src={this.state.item.imagePath} alt='item' className='image-responsive'/>
					</div>
					<div className='caption-details'>
						<h3 className='title-details'>{this.state.item.title}</h3>
						<p className='description-details'>{this.state.item.description}</p>
						<p className="release-details">Release Date: {this.state.item.releaseDate}</p>
						<div className='price-details'>Price: ${this.state.item.price}</div>
						<Link to={'#'} style={{ textDecoration: 'none' }}>
							<div className='addBtn-details' onClick={() => this.addToCart(this.state.item._id)}>Add To Cart</div>
						</Link>
						{this.props.loggedIn && !this.props.onRadar ?
								<Link to={'#'} style={{ textDecoration: 'none' }}>
									<div className='addToRadar' onClick={() => this.addToRadar(this.state.item._id)}>Add To Radar</div>
								</Link>
						: ( this.props.loggedIn ?
								<div className='radar-icon'></div>
						:
								<span></span>
						)}
					</div>
				</div>
				<div className='reviews'>
					<h2>User Reviews</h2>
					<hr/>
					<UserReviews itemId={this.state.item._id ? this.state.item._id : '...loading'}
					             reviews={this.state.item.reviews ? this.state.item.reviews : []}
					             updateReviews={this.updateReviews}
					/>
				</div>
			</div>
		);
	}
}

export default Show
