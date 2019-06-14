import classNames from 'classnames';
import React, {PropTypes} from 'react';

class Button extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         active: false,    
      }
   }

   localBtnClick(e) {
      this.setState({
          active: !this.state.active,    
      });//, this.props.buttonClick);
      this.props.buttonClick(this.props.index);
   }

    render() {    
        const cssclasses = classNames('Button', this.state.active ? 'on' : 'off');
        return (
         <button 
           className={cssclasses}
           onClick={this.localBtnClick.bind(this)} 
         ></button>
      )
    }
}

export default Button
