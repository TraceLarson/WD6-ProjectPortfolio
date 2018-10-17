import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render(){
    return (
      <footer>
        <div id="infoBox" className="container-fluid">
            <h2>Information</h2>
            <ul>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Return Policy</Link></li>
              <li><Link to="#">Contact</Link></li>
            </ul>
        </div>
        <div id="followBox" className="container-fluid">
          <img src="/images/gameDROP_black.png" id="logo3" alt="logo3"/>
          <h3>Follow Us</h3>
            <a className="follow-icon" href="https://www.twitter.com"><img src="/images/twitter.png" alt="twitter link"/></a>
            <a className="follow-icon" href="https://www.facebook.com"><img src="/images/facebook.png" alt="facebook link"/></a>
            <a className="follow-icon" href="https://www.instagram.com"><img src="/images/instagram.png" alt="instagram link"/></a>
            <a className="follow-icon" href="https://www.youtube.com"><img src="/images/youtube.png" alt="youtube link"/></a>
            <a className="follow-icon" href="https://www.twitch.com"><img src="/images/twitch.png" alt="twitch link"/></a>
        </div>
      </footer>
    )
  }
}

export default Footer
