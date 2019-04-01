import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';

const photos = [
    {
      src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1540252444/Paris/Paris-28.jpg",
      width: 2.5,
      height: 3
    },
    {
      src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539019701/Toronto/Toronto-6.png",
      width: 1.5,
      height: 1
    },
    {
      src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539024266/Algonquin%20Park/Algonquin-Park-Ontario-1.png",
      width: 4,
      height: 4
    },
    {
      src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539019729/Toronto/Toronto-19.jpg",
      width: 16,
      height: 9
    },
    {
      src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539128721/Toronto/Toronto-82.jpg",
      width: 0.75,
      height: 1
    },
    {
      src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1540252225/Paris/Paris-5.jpg",
      width: 1.33,
      height: 1
    },
    {
      src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1540252442/Paris/Paris-32.jpg",
      width: 0.75,
      height: 1
    },
    {
      src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1540252433/Paris/Paris-25.jpg",
      width: 1.33,
      height: 1
    },
    {
      src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129819/Japan/Japan-2.jpg",
      width: 0.75,
      height: 1
    },
    {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539215810/Hawaii/Hawaii-22.jpg",
        width: 1.33,
        height: 1
      },
      {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1540252442/Paris/Paris-30.jpg",
        width: 0.75,
        height: 1
      },
      {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539024226/Algonquin%20Park/Algonquin-Park-Ontario-11.jpg",
        width: 1.33,
        height: 1
      },
      {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539024370/Algonquin%20Park/Algonquin-Park-Ontario-21.jpg",
        width: 0.75,
        height: 1
      },
      {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539019701/Toronto/Toronto-27.jpg",
        width: 1.33,
        height: 1
      },
      {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539128929/Toronto/Toronto-63.jpg",
        width: 0.75,
        height: 1
      },
      {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1540252320/Paris/Paris-8.jpg",
        width: 1.33,
        height: 1
      },
      {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539129000/Toronto/Toronto-71.jpg",
        width: .75,
        height: 1
      },
      {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539128952/Toronto/Toronto-65.jpg",
        width: 1.33,
        height: 1
      },
      {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539019523/Toronto/Toronto-5.jpg",
        width: 0.75,
        height: 1
      },
      {
        src: "https://res.cloudinary.com/dzyrd6s5u/image/upload/v1539019535/Toronto/Toronto-10.jpg",
        width: 1.33,
        height: 1
      },
      {
        src: " https://res.cloudinary.com/dzyrd6s5u/image/upload/v1540252248/Paris/Paris-4.jpg",
        width: 0.75,
        height: 1
      }



     
    
  ];

  function columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    return columns;
  }

class PhotoGallery extends React.Component {
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
        
     

        <Gallery photos={photos} columns={columns} onClick={this.openLightbox} />
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

export default PhotoGallery;

