import React, { useState } from 'react';

const Form = (props) =>{

    return(
        <form onSubmit = {props.loadWeather} >
            <input className="inputplace" type="text" name="city" placeholder="choose city" autoComplete="off"></input>
             <button className="get">Get</button>
        </form>
    );
}
export default Form;