'use strict';
import Speed from './Speed.js';
import Parts from './Parts.js';
import Controls from './Controls.js';
import Pattern from './Pattern.js';
import React from 'react';
import ReactDOM from 'react-dom';

class Application extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         snarePattern: [false, false, false, false,
                         false, false, false, false,
                         false, false, false, false,
                         false, false, false, false ],
         hhPattern: [false, false, false, false,
                         false, false, false, false,
                         false, false, false, false,
                         false, false, false, false ], 
         kickPattern: [false, false, false, false,
                         false, false, false, false,
                         false, false, false, false,
                         false, false, false, false ], 
         clapPattern: [false, false, false, false,
                         false, false, false, false,
                         false, false, false, false,
                         false, false, false, false ],
         boomPattern: [false, false, false, false,
                         false, false, false, false,
                         false, false, false, false,
                         false, false, false, false ],
         play: false,
         beat: 0,
         speed: 80,
     }
   }

   componentDidMount() {
     // this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
     var snare = document.querySelector('.sound__snare');
     var hiHat = document.querySelector('.sound__hihat');
     var kick = document.querySelector('.sound__kick');
     var clap = document.querySelector('.sound__clap');
     var boom = document.querySelector('.sound__boom');
     var drums = new Tone.MultiPlayer({
            urls : {
                "snare" : snare.src,
                "hihat" : hiHat.src,
                "kick" : kick.src,
                "boom" : boom.src,
                "clap" : clap.src,
            },
            volume : -3,
            fadeOut : 0.1,
        }).toMaster();
     var that = this;
     this.loop = new Tone.Sequence(function(time, col){
       //var column = matrix[col];
       /*
       for (var i = 0; i < 3; i++){
          if (column[i] === 1){
              //slightly randomized velocities
              var vel = Math.random() * 0.5 + 0.5;
              keys.start(noteNames[i], time, 0, "32n", 0, vel);
          }
       }
       */
       if (that.state.snarePattern[col]) {
         var vel = Math.random() * 0.5 + 0.5;
         drums.start("snare", time, 0, "32n", 0, vel);    
       }
       if (that.state.hhPattern[col]) {
         var vel = Math.random() * 0.5 + 0.5;
         drums.start("hihat", time, 0, "32n", 0, vel);
       }
       if (that.state.kickPattern[col]) {
         var vel = Math.random() * 0.5 + 0.5;
         drums.start("kick", time, 0, "32n", 0, vel);
       }
       if (that.state.clapPattern[col]) {                                                                                                                                                   
         var vel = Math.random() * 0.5 + 0.5;                                                                                                                                               
         drums.start("clap", time, 0, "32n", 0, vel);                                                                                                                                       
       } 
       if (that.state.boomPattern[col]) {                                                                                                                                                   
         var vel = Math.random() * 0.5 + 0.5;                                                                                                                                               
         drums.start("boom", time, 0, "32n", 0, vel);                                                                                                                                       
       } 

     }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");
     Tone.Transport.start();

   }

   playPatterns() {
      this.state.play = !this.state.play;
      this.setState(this.state);
      if (this.state.play) {
         this.loop.start();
      } else {
         this.loop.stop();    
      }
   }
    changeButtonState(index) {
       this.state.snarePattern[index] = !this.state.snarePattern[index];
       this.setState(this.state);
   } 

   changeHHButtonState(index) {                                                                                                                                                                                          
       this.state.hhPattern[index] = !this.state.hhPattern[index];
       this.setState(this.state);
   }
   
   changeKickButtonState(index) { 
       this.state.kickPattern[index] = !this.state.kickPattern[index];
       this.setState(this.state);
   }
   
   changeClapButtonState(index) {                                                                                                                                                           
       this.state.clapPattern[index] = !this.state.clapPattern[index];                                                                                                                      
       this.setState(this.state);                                                                                                                                                           
   } 

   changeBoomButtonState(index) {                                                                                                                                                           
       this.state.boomPattern[index] = !this.state.boomPattern[index];                                                                                                                      
       this.setState(this.state);                                                                                                                                                           
   } 

   changeButtonSpeed(newSpeed) {
       Tone.Transport.bpm.rampTo(newSpeed);
       this.setState({
           speed: newSpeed
       });    
   }

   render() {
    return (

    <div className="drum-machine">
      <div className="controls">
       <Controls playClick={ this.playPatterns.bind(this) }/>
       <Speed changeSpeed={this.changeButtonSpeed.bind(this)} />
      </div>
      <div className="patterns">
       <Pattern type="Snare" pattern={ this.state.snarePattern } buttonClick={this.changeButtonState.bind(this)} />
       <Pattern type="Hi-hat" pattern={ this.state.hhPattern } buttonClick={this.changeHHButtonState.bind(this)} />
       <Pattern type="Kick" pattern={ this.state.kickPattern } buttonClick={this.changeKickButtonState.bind(this)} /> 
       <Pattern type="Clap" pattern={ this.state.clapPattern } buttonClick={this.changeClapButtonState.bind(this)} />  
       <Pattern type="Boom" pattern={ this.state.boomPattern } buttonClick={this.changeBoomButtonState.bind(this)} />  
      </div>
    </div>
     )
   }
}

export default Application
