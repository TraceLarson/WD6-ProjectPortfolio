import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    axios.get('/item')
      .then(res => {
        this.setState({ items: res.data })
      })
  }

  addToCart(id) {
    console.log('TEST: ' + id)
    axios.get('/item/addToCart/'+ id)
			.then(response => {
				if (!response.data.error) {
          //Send update cart qty to header component
          this.props.updateCartQty({
            qty: response.data.totalQty
          })
        }
        else {
          console.log(response.data.error)
        }
			})
  }

  render() {
    return (
      <div>
        <div id="carousel">
          <div className="carousel slide">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

          <div className="carousel-inner">
              <div className="item active">
                <img src="images/assassins-creed-odyssey.png" alt="Slide 1" className="carImg" />
              </div>

              <div className="item">
                <img src="images/Shadow-of-the-tomb-raider.png" alt="Slide 2" className="carImg" />
              </div>

              <div className="item">
                <img src="images/destiny-2.png" alt="Slide 3" className="carImg" />
              </div>
          </div>
          <a className="left carousel-control" href="#carousel" data-slide="prev">
            <span className="icon-prev"></span>
          </a>
          <a className="right carousel-control" href="#carousel" data-slide="next">
            <span className="icon-next"></span>
          </a>
        </div>
      </div>
      <div className='wrapper'>
        <h1 className='section-header'>Best Sellers</h1>
        {this.state.items.map(item =>
          <div className='game' key={item._id}>
            <Link to={`/show/${item._id}`}><img src={item.imagePath} alt='item' className='image-responsive'/></Link>
            <div className='caption'>
              <h3>{item.title}</h3>
              <p className='description'>{item.description}</p>
              <p className="releaseDate">Release Date: {item.releaseDate}</p>
              <div className="clearfix">
                <div className='price pull-left'>Price: ${item.price}</div>
              </div>
            </div>
            <Link to={'#'}><div className='addBtn' onClick={() => this.addToCart(item._id)}>Add To Cart</div></Link>
          </div>
        )}
      </div>
    </div>
    );
  }
}

export default Home
