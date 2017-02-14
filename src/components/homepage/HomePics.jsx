import React, { Component } from 'react';
import HP1 from '../../images/homepic_1.jpg';
import HP2 from '../../images/homepic_2.jpg';
import HP3 from '../../images/homepic_3.jpg';
import HP4 from '../../images/homepic_4.jpg';
import HP5 from '../../images/homepic_5.jpg';
import HP6 from '../../images/homepic_6.jpg';

class HomePics extends Component{
  render() {
    return (
      <div className="homepics-container">
        <img alt="homepage-pic" className="homepics-item" src={HP1}/>
        <img alt="homepage-pic" className="homepics-item" src={HP2}/>
        <img alt="homepage-pic" className="homepics-item" src={HP3}/>
        <img alt="homepage-pic" className="homepics-item" src={HP4}/>
        <img alt="homepage-pic" className="homepics-item" src={HP5}/>
        <img alt="homepage-pic" className="homepics-item" src={HP6}/>
      </div>
    )
  }
}

export default HomePics;
