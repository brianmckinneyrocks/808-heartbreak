import Button from './Button';
import React from 'react';

class Pattern extends React.Component {
 
   constructor(props) {
      super(props);    
   }

   render() {
    return (
      <div className="pattern">
        <h2>{ this.props.type }</h2>
        <div className="button_list">
         {this.props.pattern.map((item, index) => 
          <Button value={item} index={index} key={index} buttonClick={ this.props.buttonClick } />       
         )}
        </div>
      </div>
     )
   }
}

export default Pattern
