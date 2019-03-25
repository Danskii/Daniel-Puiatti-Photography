import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
 
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-25.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-3.jpg', width: 3, height: 3 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-22.jpg', width: 2, height: 2 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-1.jpg',  width: 3, height: 3 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-1.jpg',  width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-30.jpg',  width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-4.jpg',  width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-37.jpg',  width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-6.jpg',  width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-28.jpg',  width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-2.jpg',  width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-1.jpg',  width: 1, height: 1 }
];




class App extends Component {

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} direction={"column"} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />

      </div>
    )
  }
}

export default App;
