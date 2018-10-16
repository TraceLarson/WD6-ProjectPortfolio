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
	}

	getItem = () => {
		axios.get('/item/' + this.props.match.params.id)
			.then(res => {
				this.setState({item: res.data});
				console.log(this.state.item);
			});
	}

	addToCart = (id) => {
    axios.get('/item/addToCart/'+ id)
			.then(response => {
				if (!response.data.error) {
          //Send updated cart qty to header component
					this.props.updateCartQty({
						qty: response.data.totalQty
					})
        }
        else {
          console.log(response.data.error)
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
						<Link to={'#'}><div className='addBtn-details' onClick={() => this.addToCart(this.state.item._id)}>Add To Cart</div></Link>
					</div>
				</div>
				<div className={'details'}>
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
