import { useContext, useState } from "react";
import { CodeContext } from "../context/context";
import './input.css';
function Input() {
    const {codes, setCodes} = useContext(CodeContext)
    const [inputValue, setInputValue] = useState('')
    const inputHandler = function(e) {
        setInputValue(e.target.value)
    }

    const clearInput = function() {
        setCodes([]);
        setInputValue('');
    }

    const updateState = function(e) {
        const separatedCodes = inputValue.split('\n').filter(code=>{
            console.log({code, codeLength: code.length})
            return code.length > 0;
        });
        console.log({separatedCodes})
        setCodes([...separatedCodes])
    }

    return (
        <div className="input_box">
            <textarea type="text" value={inputValue} onChange={inputHandler}/>
            <button type="submit"  onClick={updateState}>Wygeneruj kody kreskowe</button>
            <button onClick={clearInput}>wyczyść formularz</button>
        </div>
    )
}
export default Input;
