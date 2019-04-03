import React from "react";


class Footer extends React.Component {

    render() {
  
        return (

<div>


<div className="FooterWrapper">
<div className="SocialIconWrapper">
<img className="SocialIcon"  src={require("../src/icons/twitter.png")} onClick={()=> window.open("http://www.twitter.com/dpuiatti", "_blank")} />
<img className="SocialIcon"  src={require("../src/icons/instagram.png")} onClick={()=> window.open("http://www.instagram.com/ddaannskii", "_blank")} />
<img className="SocialIcon"  src={require("../src/icons/linkedin.png")} onClick={()=> window.open("https://www.linkedin.com/in/daniel-puiatti-15688312/", "_blank")}/>
<img className="SocialIcon"  src={require("../src/icons/github.png")} onClick={()=> window.open("https://github.com/Danskii", "_blank")}/>
</div>
</div>
</div>
        )

    }
}

export default Footer;

