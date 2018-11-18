import React, { Component } from 'react';
import w1 from './elements/picture/cv1.jpg'
import w2 from './elements/picture/cv2.jpg'
import w3 from './elements/picture/dw1.jpg'
import w4 from './elements/picture/dw2.jpg'
import w5 from './elements/picture/dw3.jpeg'
import w6 from './elements/picture/dw4.jpeg'
import w7 from './elements/picture/jam1.jpg'
import w8 from './elements/picture/jam2.jpg'
import w9 from './elements/picture/jam3.jpg'
import w10 from './elements/picture/jam4.jpg'

class Home extends Component {
    render() {
      var h1 = <i> Watch Club </i>;

      return (
      <div className="content">
        <h1 style ={{textAlign:"center", color:'blue'}}>
        {h1}</h1> 
        <h2>Product {this.props.match.params.nama}</h2>
        <img src={w1} />
</div>

         
      );
  }
}

export default Home;
