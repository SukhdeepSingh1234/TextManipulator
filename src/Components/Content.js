import React, { useState } from 'react'

export default function Content(props) {
    
    const [text,setText]=useState('');
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearText=()=>{
        setText('');
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
 return (
    <div className='container min-vh-100 min-vw-100' style={{color:props.mode==='light'?'black':'white',backgroundColor: props.mode ==='dark'? 'black':'white'}} >
        <div className='container' style={{backgroundColor: props.mode ==='dark'? 'black':'white'}} >
        <h1>{props.title}</h1>
        <div className='mb-3 my-4'>
          <textarea className='form-control'id='myBox' style={{backgroundColor: props.mode ==='dark'? 'black':'white',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert To Lowercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearText}>Clear</button>
        <button disabled={text.length === 0} className='btn btn-warning mx-2 my-1' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className='btn btn-warning mx-2 my-1' onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
        </div>
        <div className='container my-3' style={{color:props.mode==='light'?'':'white'}}>
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div> 
    </div>
  )
}
