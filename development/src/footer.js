import React from "react";
import 'tachyons';

class Footer extends React.Component {

    render() {
  
        return (

<div>


<div className="FooterWrapper w-100  fixed bottom-0 bg-black pa2" >
<div className="fl w-60 white Athelas f4 lh-copy">Daniel Puiatti Photography</div>
<div className="fl w-40 fr" >
<div className="fl w-25 white fab fa-twitter">Tw</div>
<div className="fl w-25 white fab fa-instagram" >Ig</div>
<div className="fl w-25 white fab fa-github" >Git</div>
<div className="fl w-25 white far fa-envelope" >Em</div>
</div>

</div>



</div>
        )

    }
}

export default Footer;

