import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("UpperCase Done!!","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        // console.log("uppercase clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("LowerCase Done!!","success");


    }

    const copyText = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#495057' }} >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white'
                        , color: props.mode === 'dark' ? 'white' : '#495057'
                    }} id="mybox" rows="6"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}> Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}> Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={copyText}> Copy Text</button>

            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#495057' }} >
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes read</p>
                <p>Preview</p>
                <p>{text.length>0?text:"Enter some sentences above"}</p>
            </div>
        </>
    )
}
