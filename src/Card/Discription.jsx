import React, { Component } from 'react';

class Discription extends Component {
  constructor(name){
      super(name)
  }

    render() {
        return (
            <div>
                <h1 className="Discribe">{this.props.name}</h1>
            </div>
        );
    }
}

export default Discription;
