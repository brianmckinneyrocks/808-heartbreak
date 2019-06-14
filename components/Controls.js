import PlayButton from './PlayButton';
import React from 'react';

class Controls extends React.Component {
 
   constructor(props) {
      super(props);    
   }
   

   render() {
    return (

    <div className="control_play">
        <PlayButton buttonClick={ this.props.playClick } />       
    </div>
     )
   }
}

export default Controls
