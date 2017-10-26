// Libs
import React from 'react';

var sourceImage = require('../img/indigo-slate--white.png');

const Logo = React.createClass({
  render: function () {
    return (
      <div className="logo-container" >
        <img src={sourceImage}/>
      </div>
    );
  }
});

export default Logo;
