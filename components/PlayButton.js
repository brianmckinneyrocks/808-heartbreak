import classNames from 'classNames';
import React, {PropTypes} from 'react';

class PlayButton extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        active: false,
      };
   }

    _toggleState() {
        this.setState({ active: !this.state.active },
         this.props.buttonClick    
        );         
    }
    
    _mobile_start() {
       StartAudioContext(Tone.context);
    }

    render() {    
         const cssclasses = classNames('play_button', this.state.active ? 'on' : 'off');
        return (
         <button 
           className={cssclasses}
           onClick={this._toggleState.bind(this)} 
           onTouchStart={this._mobile_start}
         >{ this.state.active ? "Stop" : "Play" }</button>
      )
    }
}

export default PlayButton
