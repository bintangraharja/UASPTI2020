import React from 'react';

const Form = (props) =>{
    return(
        <form onSubmit = {props.loadWeather} >
            <input type="text" name="city" placeholder="choose city"></input>
            <input type="text" name="country" placeholder="choose country"></input>
            <button>Get</button>
        </form>
    );
}
export default Form;