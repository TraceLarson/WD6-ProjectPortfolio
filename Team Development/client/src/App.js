import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="carousel">
          <div class="carousel slide">
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

          <div class="carousel-inner">
              <div class="item active">
                <img src="https://media.playstation.com/is/image/SCEA/assassins-creed-odyssey-hero-banner-with-logo-01-ps4-us-12jun18?$native_nt$" alt="Slide 1" class="carImg" />
                  <div class="carousel-caption">
                    <h1>Slide 1</h1>
                    <p>Slide 1 Description</p>
                  </div>
              </div>

              <div class="item">
                <img src="https://media.playstation.com/is/image/SCEA/assassins-creed-odyssey-hero-banner-with-logo-01-ps4-us-12jun18?$native_nt$" alt="Slide 2" class="carImg" />
                  <div class="carousel-caption">
                    <h1>Slide 2</h1>
                    <p>Slide to Description</p>
                  </div>
              </div>

              <div class="item">
                <img src="https://static.techspot.com/images2/news/bigimage/2018/05/2018-05-03-image-28.jpg" alt="Slide 3" class="carImg" />
                  <div class="carousel-caption">
                    <h1>Slide 3</h1>
                    <p>Slide 3 Description</p>
                  </div>
              </div>
          </div>
          <a class="left carousel-control" href="#carousel" data-slide="prev">
            <span class="icon-prev"></span>
          </a>
          <a class="right carousel-control" href="#carousel" data-slide="next">
            <span class="icon-next"></span>
          </a>
        </div>
      </div>

      <div class="wrapper">
        <h1 class="section-header">New Releases</h1>
        {/*
          PLACEHOLDER: Static content. Update dynamically after database has been seeded.
        */}
        <div class="thumbnail">
          <img src="https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png" alt="..." class="img-responsive"/>
          <div class="caption">
            <h3>Game Title</h3>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div class="clearfix">
              <div class="price pull-left">$12</div>
            </div>
          </div>
          <a href="#" class="btn" role="button">Add To Cart</a>
        </div>
        <div class="thumbnail">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png" alt="..." class="img-responsive"/>
            <div class="caption">
              <h3>Game Title</h3>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="clearfix">
                    <div class="price pull-left">$12</div>
                </div>
            </div>
            <a href="#" class="btn" role="button">Add To Cart</a>
        </div>
        <div class="thumbnail">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png" alt="..." class="img-responsive"/>
            <div class="caption">
                <h3>Game Title</h3>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="clearfix">
                    <div class="price pull-left">$12</div>
                </div>
            </div>
            <a href="#" class="btn" role="button">Add To Cart</a>
        </div>
        <div class="thumbnail">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png" alt="..." class="img-responsive"/>
            <div class="caption">
              <h3>Game Title</h3>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="clearfix">
                    <div class="price pull-left">$12</div>
                </div>
            </div>
            <a href="#" class="btn" role="button">Add To Cart</a>
        </div>
        <div class="thumbnail">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png" alt="..." class="img-responsive"/>
            <div class="caption">
              <h3>Game Title</h3>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="clearfix">
                    <div class="price pull-left">$12</div>
                </div>
            </div>
            <a href="#" class="btn" role="button">Add To Cart</a>
        </div>
        <div class="thumbnail">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png" alt="..." class="img-responsive"/>
            <div class="caption">
              <h3>Game Title</h3>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="clearfix">
                    <div class="price pull-left">$12</div>
                </div>
            </div>
            <a href="#" class="btn" role="button">Add To Cart</a>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
