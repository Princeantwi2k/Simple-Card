import React, { Component } from 'react';

import Title from './Title'
import Discription from './Discription'
import Image from './Image'
import Pic from './Picture.png'
import './Card.css'



class SimpleCard extends Component {
  render() {
    return (
      <div className="Card">
        <section ClassName="simply-card">
        <Title nav={'IS WORKING PERFECTLY'} />
        <Discription name={'React is the best and recommended skills any developer must involve in currently'} />
        </section>
       
      <Image img2={Pic} />
        
      </div>
    );
  }
}

export default SimpleCard;