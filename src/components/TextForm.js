import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLwClick = ()=>{
       // console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick =()=>{
        let newText = " ";
        setText(newText)
        props.showAlert("Cleared text", "success")
    }
    //Here we handle events 
    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value);//Here we write something in text box and set it using setText and update text value
    }
    const handleCopy = ()=> {
         let newText = document.getElementById("myBox");
       //  newText.select();
        navigator.clipboard.writeText(newText.value);
        //In below code for copy text we select all the text and after copy text we remove all ranges
       // document.getSelection().removeAllRanges()
        props.showAlert("Copied", "success");
    }
    const handleExtraSpaces =()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success");

}   
 const[text, setText] = useState('');
    // text = "new text";//wrong way to change the state
    //setText("new text");//correct way to change the state
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2 className='mb-2'>{props.heading} </h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLwClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
           <h3>Your text summary</h3>
           {/* back slash s mean any white space */}
           <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
           <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Nothing to preview."}</p>
        </div>
        </>
        
    )
}
