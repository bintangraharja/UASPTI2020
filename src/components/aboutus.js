import React from 'react';
import github from './aset/logo_github.png';
import ig from './aset/logo_ig.png';

function AboutUs(){
    return(
        <div>
        <h1>Develop by: </h1>
    <div className="ananda">
      <p>Ananda Setiyani</p>
      <p>00000037692</p>
      <a href="https://github.com/AnandaSetiyani" target="_blank" rel="noreferrer">
        <img className="logo" src={github} alt="github" ></img>
      </a><br/>
      <a href="https://www.instagram.com/anandasf29/" target="_blank" rel="noreferrer">
        <img className="logo" src={ig} alt="github"></img>
      </a>
    </div>
    <div className="bintang">
      <p>Bintang Raharja</p>
      <p>00000037686</p>
      <a href="https://github.com/bintangraharja" target="_blank" rel="noreferrer">
        <img className="logo" src={github} alt="github"></img>
      </a><br/>
      <a href="https://www.instagram.com/bintangraharja_/" target="_blank" rel="noreferrer">
        <img className="logo" src={ig} alt="github"></img>
      </a>
    </div>
    <div className="maureen">
      <p>Maureen Zerlina O.</p>
      <p>00000036850</p>
      <a href="https://github.com/maureenzerl" target="_blank" rel="noreferrer">
        <img className="logo" src={github} alt="github"></img>
      </a><br/>
      <a href="https://www.instagram.com/maureenzerl/" target="_blank" rel="noreferrer">
        <img className="logo" src={ig} alt="github"></img>
      </a>
    </div>
    <div className="rico">
      <p>Rico Ferdinand</p>
      <p>00000036905</p>
      <a href="https://github.com/ricoferdinandd" target="_blank" rel="noreferrer">
        <img className="logo" src={github} alt="github"></img>
      </a><br/>
      <a href="https://www.instagram.com/ricoferdinandd/" target="_blank" rel="noreferrer">
        <img className="logo" src={ig} alt="github"></img>
      </a>
    </div>
    <div className="source">
    <h2>Special Thanks To: </h2>
            <p className="source">https://openweathermap.org/</p>
            <p className="source">https://unsplash.com</p>
            <p className="source">https://www.w3schools.com</p>
            <p className="source">https://www.youtube.com</p>
    </div>
    </div>
    );
}
export default AboutUs;