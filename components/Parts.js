import classNames from 'classnames';
import React, {PropTypes} from 'react';

class Parts extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        value: 1,
      };
   }

    _stepState() {
        this.setState({value: event.target.value});
    }

    render() {    
        const steps = [1,2,3,4,5];
        return (
        <div>
         <label htmlFor="parts">Part</label>
         <input onChange={this._stepState.bind(this)} type="range" id="parts" min="1" value={this.state.value} max="10" step="1" />
        </div>
      )
    }
}


export default Parts
