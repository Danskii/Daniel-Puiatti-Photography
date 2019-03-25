import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
 
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-3.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-4.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-5.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-6.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-7.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-8.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-9.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-10.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-11.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-12.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-13.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-14.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-15.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-16.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-17.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-18.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-19.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-20.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-21.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-22.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-23.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-24.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-25.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-26.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-27.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-28.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-29.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-30.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-31.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-32.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-33.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-34.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-35.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-36.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-37.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-38.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-39.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-40.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-41.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-42.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-43.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-44.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-45.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-46.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-47.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-48.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-49.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-50.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-51.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-52.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-53.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-54.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-55.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-56.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-57.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-58.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-59.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-60.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-61.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-62.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-63.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-64.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-65.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-66.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-67.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-68.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-69.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-70.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-71.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-72.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-73.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-74.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-75.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-76.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-77.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-78.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-79.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-80.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-81.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-82.jpg', width: 1, height: 1 },
    { src: 'https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129013/Toronto/Toronto-83.jpg', width: 1, height: 1 }

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
