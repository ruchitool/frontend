import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SubmitButton extends Component {
    
    render () {

        return (
            <Link to="/"><button className='button-lit'>Submit</button></Link>
        )
    }
}

export default (SubmitButton);