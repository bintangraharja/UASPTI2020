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
          <a href="https://github.com/AnandaSetiyani" target="_blank" rel="noreferrer">
            <img className="logo" src={github} alt="github" ></img>
          </a>
          <a href="https://www.instagram.com/anandasf29/" target="_blank" rel="noreferrer">
            <img className="logo" src={ig} alt="github"></img>
          </a>
        </div>
        </div>
        <div className="column">
        <div className="card">
        <img className="foto" src={bintang} alt="bintang"></img> <br></br>
          <p>Bintang Raharja <br></br> 00000037686</p>
          <a href="https://github.com/BintangRaharja" target="_blank" rel="noreferrer">
            <img className="logo" src={github} alt="github" ></img>
          </a>
          <a href="https://www.instagram.com/bintangraharja_/" target="_blank" rel="noreferrer">
            <img className="logo" src={ig} alt="github"></img>
          </a>
        </div>
        </div>
        <div className="column">
        <div className="card">
        <img className="foto" src={maureen} alt="maureen"></img> <br></br>
          <p>Maureen Zerlina<br></br>00000036850</p>
          <a href="https://github.com/maureenzerl" target="_blank" rel="noreferrer">
            <img className="logo" src={github} alt="github" ></img>
          </a>
          <a href="https://www.instagram.com/maureenzerl/" target="_blank" rel="noreferrer">
            <img className="logo" src={ig} alt="github"></img>
          </a>
        </div>
        </div>
        <div className="column">
        <div className="card">
        <img className="foto" src={rico} alt="rico"></img><br></br>
          <p>Rico Ferdinand<br></br>00000036905</p>
          <a href="https://github.com/ricoferdinandd" target="_blank" rel="noreferrer">
            <img className="logo" src={github} alt="github"></img>
          </a>
          <a href="https://www.instagram.com/ricoferdinandd/" target="_blank" rel="noreferrer">
            <img className="logo" src={ig} alt="github"></img>
          </a>
        </div>
        </div>
        </Row><br/>
        <div className="card1">
        <h1><b>Special Thanks to:</b></h1>
        <p>Andi Balo - 00000037809</p>
        <p>htmlhints.com</p>
        <p>norbertbartos.tech</p>
        <p>openweathermap.org</p>
        <p>unsplash.com</p>
        <p>w3schools.com</p>
        <p>youtube.com</p>
        </div>
      </div>
    )
}
export default AboutUs;