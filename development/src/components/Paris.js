import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-1.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-2.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-3.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-4.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-5.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-6.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-7.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-8.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-9.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-10.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-11.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-12.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-13.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-14.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-15.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-16.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-17.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-18.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-19.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-20.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-21.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-22.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-23.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-24.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-25.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-26.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-27.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-28.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-29.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-30.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-31.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Paris/Paris-32.jpg', width: 1, height: 1 }

];




class Paris extends Component {

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

export default Paris;
