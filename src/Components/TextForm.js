import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To Upper Case", "success");
  }

  const handleLoClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To Lower Case", "success");
  }

  const handleFirstClick = ()=>{
    if (text === text.toUpperCase()) {
      let newtext = text.charAt() + text.slice(1).toLowerCase();
      setText(newtext);
    }
    else{
      let nt = text.charAt();
      let newtext = nt.toUpperCase() + text.slice(1);
      setText(newtext);
    }
    props.showAlert("Converted First Letter To Capital", "success");
  }

  const handleClearClick = ()=>{
    let newtext = "";
    setText(newtext);
    props.showAlert("Text is Cleared", "success");
  }

  const selectTextClick = ()=>{
    var text = document.getElementById('MyBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("Clicked");
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{color : props.mode==='light'?'black':'success'?'black':'white'}}>
      <h1 className='my-4'>{props.heading}</h1>
      <div className="mb-3">
        {/* <label htmlFor="MyBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='light'||'success'?'white':'#555555', color: props.mode==='light'||'success'?'black':'white'}} onChange={handleOnChange} id="MyBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleFirstClick}>First Letter Capital</button>
      <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={selectTextClick}>Select All</button>
      <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='light'||'success'?'black':'white'}}>
      <h1>Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
      <h2>Preview</h2>
      <p>{text.length > 0?text:'Nothing to preview here!'}</p>
    </div>
    </>
  )
}
