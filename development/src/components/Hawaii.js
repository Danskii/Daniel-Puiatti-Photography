import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
 
  { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-1.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-2.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-3.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-4.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-5.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-6.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-7.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-8.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-9.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-10.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-11.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-12.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-13.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-14.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-15.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-16.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-17.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-18.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-19.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-20.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-21.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-22.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-23.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-24.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-25.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-26.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-27.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-28.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-29.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-30.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-31.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-32.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-33.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-34.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-35.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-36.jpg', width: 1, height: 1 },
 { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Hawaii/Hawaii-37.jpg', width: 1, height: 1 }
];




class Hawaii extends Component {

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

export default Hawaii;
