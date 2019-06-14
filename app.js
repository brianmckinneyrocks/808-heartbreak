'use strict';
import React from 'react';
import Application from './components/Application.js';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <div>
    <header>
       <h1>Hello. Let's play some real drums.</h1>
    </header>
    <section className="main_content">
       <audio className="sound__clap" src="https://s3-us-west-2.amazonaws.com/gentlemint-blog-media/sounds/clap.wav"></audio>
       <audio className="sound__hihat" src="https://s3-us-west-2.amazonaws.com/gentlemint-blog-media/sounds/hihat.wav"></audio>
       <audio className="sound__kick"  src="https://s3-us-west-2.amazonaws.com/gentlemint-blog-media/sounds/kick.wav"></audio>
       <audio data-key="70" src="./sounds/openhat.wav"></audio>
       <audio className="sound__boom" src="https://s3-us-west-2.amazonaws.com/gentlemint-blog-media/sounds/boom.wav"></audio>
       <audio data-key="72" src="./sounds/ride.wav"></audio>
       <audio className="sound__snare" src="https://s3-us-west-2.amazonaws.com/gentlemint-blog-media/sounds/snare.wav"></audio>
       <audio data-key="75" src="./sounds/tom.wav"></audio>
       <audio data-key="76" src="./sounds/tink.wav"></audio>
    <Application /> 
    </section>
  </div>,
  document.getElementById('realdrums')
);
