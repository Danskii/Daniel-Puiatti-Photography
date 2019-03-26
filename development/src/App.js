import React, { Component } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";



class App extends Component {
  
  getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <CloudinaryContext
          cloudName="dzyrd6s5u"
          quality="auto"
          fetchFormat="auto"
          dpr="auto"
          responsive
          width="auto"
          crop="scale"
          class="cld-responsive"
          opacity="40"
          background="black"
         
        >
        <Image publicId={`Paris/Paris-${this.getRandomNumber()}`}>
   
        </Image>
        
        </CloudinaryContext>
      </div>
    );
  }
}

export default App;
