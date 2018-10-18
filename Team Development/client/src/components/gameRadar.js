import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class GameRadar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    axios.get('/user/gameRadar')
      .then(res => {
        if (!res.data.error) {
          this.setState({
            items: res.data.items
          })
        }
        else {
          console.log(res.data.error)
        }
      })
  }

  addToCart(id) {
    axios.get('/item/addToCart/'+id)
			.then(response => {
        console.log(response.data.totalQty)
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

  dropItem(id) {
    axios.get('/user/dropItem/'+ id)
			.then(response => {
				if (!response.data.error) {

        }
        else {

        }
			})
  }

  render() {
    return (
      <div className='game-radar'>
        <h1>Game Radar</h1>
        {this.state.items.map(item =>
        <div className='radar'>
          <img  src={item.imagePath} alt='item' className='radar-img'/>
          <p className='radar-title'>{item.title}</p>
          <p className='radar-title'>{item.price}</p>
          <Link to={'#'} style={{ textDecoration: 'none' }}><div className='radar-addbtn' onClick={() => this.addToCart(item._id)}>Add To Cart</div></Link>
        </div>
      )}
      </div>
    )
  }
}

export default GameRadar
