import {useState} from "react";
import './style.css'

function Input() {
    const [text, setText] = useState()
    return (
        <div className="container">
            <input type="text"
                   onChange={(e) => setText(e.target.value)}
            />
            <p>{text}</p>
        </div>
    );
}

export default Input;