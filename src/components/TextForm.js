import React, {useState} from 'react';

export default function TextForm(props) {
    const toUpperCaseClick = () => {
        // console.log("upper case button clicked");
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const toLowerCaseClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }
    const toClearClick = () => {
        let clearText = "";
        setText(clearText);
    }
    const toCapitalizeLetter = () => {
        let arr = text.split(" ");
        console.log(arr)
        let arr1 = "";
        for(let a of arr) {
            a =  a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
            console.log(a);
            arr1 += a + " ";
        }
        console.log(arr1);
        // let joinArr = arr.join(" ");
        setText(arr1);
    }
    const onChangeClicked = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    
    const[text,setText] = useState("Enter your text here");
    // setText("heisenberg is the deal same as einstien");
    return (
        <>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" id="textBox" value={text} onChange={onChangeClicked} rows="8"></textarea>
                {/* onChange attribute will let us edit the text area and simultaneously will call setText function */}
                <button style={{margin:"20px",padding: "10px",width:"200px"}}  type="button" className="btn btn-primary" id='btn1' onClick={toUpperCaseClick}>Uppercase</button>
                <button style={{margin:"20px",padding: "10px",width:"200px"}}  type="button" className="btn btn-primary" id='btn2' onClick={toLowerCaseClick}>Lowercase</button>
                <button style={{margin:"20px",padding: "10px",width:"200px"}}  type="button" className="btn btn-primary" id='btn3' onClick={toClearClick}>Clear Text</button>
                <button style={{margin:"20px",padding: "10px",width:"200px"}} type='button' className='btn btn-primary' id="btn4" onClick={toCapitalizeLetter}>Proper Text</button>
            </div>

            <div className='container my-3'>
                <h3>Text Summary</h3>
                <p>{text===""?0:text.split(' ').length} words and {text.length} characters</p>
                <p> {text===""?0:0.008 * text.split(' ').length} minutes read </p>
            </div>
        </>
    );
}