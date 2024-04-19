import React, {useState} from 'react'



export default function TextForm(props) {
   
    const handleUpClick=() =>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleloClick=() =>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance(text);
    //   msg.text = ;
      window.speechSynthesis.speak(msg);
    }
    const clear=() =>{
        // console.log("Uppercase was clicked"+ text);
        let newText ="";
        setText(newText)
        props.showAlert("Text Cleared!","success");
    }
    const copytext=()=>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard!","success");
    }
    const Extraspace=()=>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "))
      props.showAlert("Extra spaces removed!","success");

    }

    const handleOnChange=(event) =>{
        // console.log("On change")
        setText(event.target.value);
    }

    const [text,setText]= useState(' ');
    // setText("Sarveshvfbsjfnmfbefvdnvnddv ndvdvvdnvdd")
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
           
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
       <button disabled={text.length===0}  className="btn btn-primary mx-1 my-2" onClick={handleUpClick} style={{border: '3px solid silver'}}>Convert to Uppercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleloClick} style={{border: '3px solid silver'}}>Convert to Lowercase</button>
       <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-2 my-2" style={{border: '3px solid silver'}}>Text Speak</button>
       <button disabled={text.length===0} type="submit" onClick={clear} className="btn btn-primary mx-2 my-2" style={{border: '3px solid silver'}}>Clear Text</button>
       <button disabled={text.length===0} type="submit" onClick={copytext} className="btn btn-primary mx-2 my-2" style={{border: '3px solid silver'}}>Copy text</button>
       <button disabled={text.length===0} type="submit" onClick={Extraspace} className="btn btn-primary mx-2 my-2" style={{border: '3px solid silver'}}>Remove Extra Spaces</button>
     
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
