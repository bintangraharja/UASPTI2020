import React from 'react';
import { Card, Col, Row } from 'antd';
import github from '../components/aset/logo_github.png';
import ig from '../components/aset/logo_ig.png';

function AboutUs(){
    return(
      <div>
        <h1>About Us</h1>
        <br></br>
        <div className="developer">
        <row>
        <column>
        <div className="card">
          <container>
          <p>Ananda Setiyani</p>
          <p>00000037692</p>
          <a href="https://github.com/AnandaSetiyani" target="_blank" rel="noreferrer">
            <img className="logo" src={github} alt="github" ></img>
          </a><br/>
          <a href="https://www.instagram.com/anandasf29/" target="_blank" rel="noreferrer">
            <img className="logo" src={ig} alt="github"></img>
          </a>
          </container>
        </div>
        </column>
        <column>
        <div className="card">
          <container>
          <p>Bintang Raharja</p>
          <p>00000037686</p>
          <a href="https://github.com/BintangRaharja" target="_blank" rel="noreferrer">
            <img className="logo" src={github} alt="github" ></img>
          </a><br/>
          <a href="https://www.instagram.com/bintangraharja_/" target="_blank" rel="noreferrer">
            <img className="logo" src={ig} alt="github"></img>
          </a>
          </container>
        </div>
        </column>
        </row>
      </div>
      </div>
    );
}
export default AboutUs;