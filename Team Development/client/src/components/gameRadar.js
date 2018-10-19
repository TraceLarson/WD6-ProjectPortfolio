import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class GameRadar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.gameRadar || []
    }
  }

  componentDidMount() {
    this.props.updateGameRadar()
  }

  addFromRadar(id) {
    axios.get('/user/addFromRadar/'+id)
			.then(response => {
				if (!response.data.error) {
          this.props.updateCartQty({
            qty: response.data.cart.totalQty
          })
          this.props.updateGameRadar()
          this.props.getCartItems()
        }
        else {
          console.log(response.data.error)
        }
			})
  }

  dropFromRadar(id) {
    axios.get('/user/dropFromRadar/'+id)
			.then(response => {
				if (!response.data.error) {
          this.props.updateGameRadar()
        }
        else {
          console.log(response.data.error)
        }
			})
  }

  renderEmptyRadar = () => {
    return (
      <div className='empty-radar'>
        <h1>Game Radar</h1>
        <h2>Add Games To Keep Them On Your Radar</h2>
        <div className='radar-empty-icon'></div>
      </div>
    )
  }

  renderGameRadar = () => {
    return (
      <div className='game-radar'>
        <h1>Game Radar</h1>
        {this.props.gameRadar.map(item =>
        <div className='radar-row'>
          <img  src={item.imagePath} alt='item' className='radar-img'/>
          <div className='radar-info'>
            <p className='radar-title'>{item.title}</p>
            <p className='radar-price'>Price: ${item.price}</p>
          </div>
          <Link to={'#'} style={{ textDecoration: 'none' }}><div className='radar-addBtn' onClick={() => this.addFromRadar(item._id)}>Add To Cart</div></Link>
          <Link to={'#'} style={{ textDecoration: 'none' }}><div className='radar-dropBtn' onClick={() => this.dropFromRadar(item._id)}>Drop Off Radar</div></Link>
        </div>
      )}
      </div>
    )
  }

  render() {
    if (this.props.gameRadar.length <= 0) {
      return this.renderEmptyRadar()
    }
    else{
      return this.renderGameRadar()
    }
  }
}

export default GameRadar
