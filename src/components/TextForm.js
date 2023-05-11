import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}> Convert to UpperCase</button>
        </div>
        <div className="container">
            <h1>Your total words</h1>
            <p>{text.length} characters</p>
        </div>
        </>
    )
}
