import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    axios.get('/api/item/'+this.props.match.params.id)
      .then(res => {
        this.setState({ item: res.data });
        console.log(this.state.item);
      });
  }

  render() {
    return (
      <div className='details'>
        <div className='imgFrame'>
          <img src={this.state.item.imagePath} alt='item' className='image-responsive'/>
        </div>
        <div className='caption-details'>
          <h3 className='title-details'>{this.state.item.title}</h3>
          <p className='description-details'>{this.state.item.description}</p>
          <p className="release-details">Release Date: {this.state.item.releaseDate}</p>
          <div className='price-details'>Price: ${this.state.item.price}</div>
          <div className='addBtn-details'><Link to={`/addToCart/${this.state.item._id}`}></Link>Add To Cart</div>
        </div>
      </div>
    );
  }
}

export default Show;