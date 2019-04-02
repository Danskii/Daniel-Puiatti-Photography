import React from "react";
import 'tachyons';

class Footer extends React.Component {

    render() {
  
        return (

<div>


<div className="FooterWrapper w-100  fixed bottom-0 bg-black pa3" >
<div className="fl w-75 white Athelas f4 lh-copy">Daniel Puiatti Photography</div>
<div className="fl w-25" >
<div className="fl w-25 white tc" >Twitter</div>
<div className="fl w-25 white tc" >Instagram</div>
<div className="fl w-25 white tc" >Email</div>
<div className="fl w-25 white tc" >Git</div>
</div>

</div>



</div>
        )

    }
}

export default Footer;

