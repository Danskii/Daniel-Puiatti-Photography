import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
 
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-1.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-2.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-3.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-4.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-5.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-6.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-7.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-8.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-9.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-10.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-11.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-12.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-13.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-14.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-15.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-16.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-17.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-18.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-19.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-20.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-21.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-22.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-23.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-24.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-25.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-26.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-27.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-28.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-29.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-30.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-31.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-32.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-33.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-34.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-35.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-36.jpg', width: 1, height: 1 },
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Japan/Japan-37.jpg', width: 1, height: 1 }

];




class Toronto extends Component {

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

export default Toronto;
