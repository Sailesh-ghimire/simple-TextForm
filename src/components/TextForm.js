import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("UpperCase Done!!", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("LowerCase Done!!", "success");


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
                        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white'
                        , color: props.mode === 'dark' ? 'white' : '#495057'
                    }} id="mybox" rows="6"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}> Convert to UpperCase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleLowClick}> Convert to LowerCase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={copyText}> Copy Text</button>

            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#495057' }} >
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <p>Preview</p>
                <p>{text.length > 0 ? text : "Enter some sentences above"}</p>
            </div>
        </>
    )
}
