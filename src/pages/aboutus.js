import React from 'react';
import { Row } from 'antd';
import github from '../components/aset/logo_github.png';
import ig from '../components/aset/logo_ig.png';
import nan from '../components/aset/nan.jpg';
import bintang from '../components/aset/bintang.jpg';
import maureen from '../components/aset/maureen.jpg';
import rico from '../components/aset/rico.jpg';

function AboutUs(){
    return(
      <div className="developer">
        <div className="subtitle">About Us</div>
        <br></br>
        <Row>
          <div className="column">
          <div className="card">
            <img className="foto" src={nan} alt="nan"></img> <br></br>
            <p>Ananda Setiyani<br></br>00000037692</p>
            <div className="socmed">
                <a href="https://github.com/AnandaSetiyani" target="_blank" rel="noreferrer">
                  <img className="logo" src={github} alt="github" ></img>
                </a>
                <a href="https://www.instagram.com/anandasf29/" target="_blank" rel="noreferrer">
                  <img className="logo" src={ig} alt="github"></img>
                </a>
            </div>
          </div>
          </div>
          <div className="column">
            <div className="card">
              <img className="foto" src={bintang} alt="bintang"></img> <br></br>
                <p>Bintang Raharja<br></br> 00000037686</p>
                <div className="socmed">
                <a href="https://github.com/BintangRaharja" target="_blank" rel="noreferrer">
                  <img className="logo" src={github} alt="github" ></img>
                </a>
                <a href="https://www.instagram.com/bintangraharja_/" target="_blank" rel="noreferrer">
                  <img className="logo" src={ig} alt="github"></img>
                </a>
                </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img className="foto" src={maureen} alt="maureen"></img> <br></br>
                <p>Maureen Zerlina<br></br>00000036850</p>
                <div className="socmed">
                <a href="https://github.com/maureenzerl" target="_blank" rel="noreferrer">
                  <img className="logo" src={github} alt="github" ></img>
                </a>
                <a href="https://www.instagram.com/maureenzerl/" target="_blank" rel="noreferrer">
                  <img className="logo" src={ig} alt="github"></img>
                </a>
                </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img className="foto" src={rico} alt="rico"></img><br></br>
                <p>Rico Ferdinand<br></br>00000036905</p>
                <div className="socmed">
                <a href="https://github.com/ricoferdinandd" target="_blank" rel="noreferrer">
                  <img className="logo" src={github} alt="github"></img>
                </a>
                <a href="https://www.instagram.com/ricoferdinandd/" target="_blank" rel="noreferrer">
                  <img className="logo" src={ig} alt="github"></img>
                </a>
                </div>
            </div>
          </div>
        </Row><br/>
        <div className="card1">
          <h1><b>Special Thanks to:</b></h1>
          <a href="https://github.com/andibalo" target="_blank" rel="noreferrer">
            <p>Andi Usman Balo - 00000037809</p>
          </a>
          <a href="https://www.instagram.com/ferlay00/" target="_blank" rel="noreferrer">
            <p>Ferry Lay - 00000037514</p>
          </a>
          <a href="https://www.htmlhints.com/" target="_blank" rel="noreferrer">
            <p>htmlhints.com</p>
          </a>
          <a href="https://norbertbartos.tech/" target="_blank" rel="noreferrer">
            <p>norbertbartos.tech</p>
          </a>
          <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
            <p>openweathermap.org</p>
          </a>
          <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">
            <p>stackoverflow.com</p>
          </a>
          <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
            <p>unsplash.com</p>
          </a>
          <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">
            <p>w3schools.com</p>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <p>youtube.com</p>
          </a>
        </div>
      </div>
    )
}
export default AboutUs;