import classNames from 'classnames';
import React, {PropTypes} from 'react';

class Speed extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        value: 2,
      };
   }

    _stepState(event) {
        this.setState({value: event.target.value});
        this.props.changeSpeed(event.target.value); 
    }

    render() {    
        const steps = [1,2,3,4,5];
        return (
        <div className="control_speed">
         <label htmlFor="speed">Speed</label>
         <input onChange={this._stepState.bind(this)} type="range" id="speed" min="80" value={this.state.value} max="140" step="10" />
        </div>
      )
    }
}


export default Speed
