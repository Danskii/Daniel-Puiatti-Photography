import React, { Component } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    };

    
  }


  

  componentDidMount() { 
    axios
      .get("http://res.cloudinary.com/dzyrd6s5u/image/list/Toronto.json")
      .then(res => {
        console.log(res.data.resources);
        this.setState({ gallery: res.data.resources });
      });
  }


  render() {
    return (
      <div className="main">
        <h1>Galleria</h1>
        <div className="gallery">
          <CloudinaryContext
            cloudName="dzyrd6s5u"
            quality="auto"
            fetchFormat="auto"
            dpr="auto"
            responsive
            width="auto"
            crop="scale"
            class="cld-responsive"
          >
            {this.state.gallery.map(data => {
              return (
                <div className="responsive" key={data.public_id}>
                  <div className="img">
                    <a
                      target="_blank"
                      href={`http://res.cloudinary.com/dzyrd6s5u/image/upload/${
                        data.public_id
                      }.jpg`}
                    >
                      <Image publicId={data.public_id} />
                      
                    </a>
                    
                  </div>
                </div>
              );
            })}
          </CloudinaryContext>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default App;
