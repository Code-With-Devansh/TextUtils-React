import React, {useState} from 'react';

export default function TextArea() {
  const [text, setText] = useState("");
    let styleobj = {
        "height":300
    }
    const upperCase=()=>{
      setText(text.toUpperCase());
    }
  const changeText = (event)=>{
    setText(event.target.value);
  }
  return (
      <>
        <div className="form-floating">
            <textarea style={styleobj} className="form-control" placeholder="Enter the text here" id="floatingTextarea2" onChange={changeText} value={text}></textarea>
            <label htmlFor="floatingTextarea2">Enter your text here:</label>
            <button className="btn btn-primary my-2" onClick={upperCase}>Change to Uppercase</button>
        </div>
      </>
  );
}
