import React, { Component } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";



class App extends Component {
  getRandom() {
    return Math.floor(Math.random() * 6) + 1  
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>

        <CloudinaryContext cloudName="dzyrd6s5u">
        <Image publicId="Paris/Paris-{getRandom()}.jpg" />
        </CloudinaryContext>
      </div>
    );
  }
}

export default App;
