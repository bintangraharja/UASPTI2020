import React, { useState } from 'react';

const Form = (props) =>{

    return(
        <form  >
            <input className="inputplace" type="text" name="city" placeholder="choose city" autoComplete="off" onKeyPress={props.search}></input>
        </form>
    );
}
export default Form;