import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    // this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    axios.get('/item')
      .then(res => {
        if (!res.data.err) {
          this.setState({
            items: res.data.items
          })
        }
      })
  }

  addToCart(id) {
    axios.get('/item/addToCart/'+id)
			.then(response => {
				if (!response.data.error) {
          this.props.updateCartQty({
            qty: response.data.totalQty
          })
          window.scrollTo(0, 0)
        }
        else {
          console.log(response.data.error)
        }
			})
  }

  render() {
    return (
      <div>
      <div className='carousel-container'>
          <div id="carousel">
            <div className="carousel slide">
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
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <h1 className='section-header'>Best Sellers</h1>
        {this.state.items.map(item =>
          <div className='game' key={item._id}>
            <Link id='game-link' to={`/show/${item._id}`} style={{ textDecoration: 'none' }}>
              <div className='img-frame'>
                <img src={item.imagePath} alt='game cover' />
              </div>
              <div className='caption'>
                <h3>{item.title}</h3>
                <p className="releaseDate">Release Date: {item.releaseDate}</p>
                <div className="clearfix">
                  <div className='price pull-left'>Price: ${item.price}</div>
                </div>
              </div>
            </Link>
            <Link to={'#'} style={{ textDecoration: 'none' }}><div className='addBtn' onClick={() => this.addToCart(item._id)}>Add To Cart</div></Link>
          </div>
        )}
      </div>
    </div>
    );
  }
}

export default Home
