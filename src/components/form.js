import React from 'react';

const Form = (props) =>{
    return(
        <form onSubmit = {props.loadWeather} >
            <input className="inputplace" type="text" name="city" placeholder="choose city" autoComplete="off"></input>
            <input className="inputplace" type="text" name="country" placeholder="choose country" autoComplete="off"></input>
            <button className="get">Get</button>
        </form>
    );
}
export default Form;