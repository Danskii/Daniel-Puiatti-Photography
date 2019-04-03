import React from "react";
import 'tachyons';

class Footer extends React.Component {

    render() {
  
        return (

<div>


<div className="FooterWrapper flex  fixed bottom-0" >
<div className="fl w-50 white Athelas f4 lh-copy ">Daniel Puiatti Photography</div>
<div className="fl w-50 fr" >
<div className="fl w-25 white fab fa-twitter ma2">
<img  className="" src={require("../src/icons/twitter.png")} />
</div>
<div className="fl w-25 white fab fa-twitter ma2">
<img  className=""   src={require("../src/icons/instagram.png")} />
</div>
<div className="fl w-25 white fab fa-twitter ma2">
<img  className=""   src={require("../src/icons/linkedin.png")} />
</div>
<div className="fl w-25 white fab fa-twitter ma2">
<img   className=""  src={require("../src/icons/github.png")} />
</div>
</div>

</div>



</div>
        )

    }
}

export default Footer;

