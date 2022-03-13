import React, {useState} from 'react'
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
function TextForm(props){
    function hello(event){
        setText(event.target.value);
    }

    const handleUpClick = (event)=>{
        console.log('Function call');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleThis = ()=>{
        console.log('Function call reverse');
        let newText = text.split(' ').reverse().join(' ');
        setText(newText);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(""));
    }

    const[text, setText] = useState('Enter text here');
    // text='New Text';//wrong ways to change stat
    //setText("New Text");//Correct way to change state
    return (
         <>
            <div class="container">          
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={hello} value={text} id="myBox" rows="8">Hello</textarea>  
                </div>
                <button className="btn btn-primary"  onClick = {handleUpClick}>Conver To Upper Case</button>
                <button className="btn btn-primary" onClick = {handleThis}>Reverse String</button>
                <button className="btn btn-primary" onClick = {handleExtraSpaces}>Handle Extra Spaces</button>
                
            </div>
            <div className="container my-2">
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Mintues</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
         </>
    )
}

// #endregion

export default TextForm;