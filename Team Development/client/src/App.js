import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('/api/item')
      .then(res => {
        this.setState({ items: res.data });
        console.log(this.state.items)
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
              <div class="clearfix">
                <div className='price pull-left'>Price: ${item.price}</div>
              </div>
            </div>
            <div className='addBtn'><Link to={`/addToCart/${item._id}`}></Link>Add To Cart</div>
          </div>
        )}
      </div>
    </div>
    );
  }
}

export default App;
