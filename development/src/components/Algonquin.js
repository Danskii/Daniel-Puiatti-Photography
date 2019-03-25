import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
 
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-1.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-2.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-3.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-4.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-5.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-6.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-7.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-8.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-9.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-10.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-11.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-12.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-13.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-14.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-15.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-16.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-17.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-18.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-19.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-20.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-21.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-22.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-23.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-24.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-25.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Algonquin%20Park/Algonquin-Park-Ontario-26.jpg', width: 1, height: 1 }
];




class Algonquin extends Component {

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

export default Algonquin;
