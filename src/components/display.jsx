import { useContext } from "react";
import { CodeContext } from "../context/context";
import BarCode from 'react-jsbarcode';
import {recodePolishCharacters} from '../utilitis/recodingPolishCharacters'
import './display.css';


export function Display() {
    const {codes, setCodes} = useContext(CodeContext)
    return(
        <div className="display_box">
            {
                codes.map(code=>{
                    console.log({test:recodePolishCharacters(code)})
                    return <BarCode value={recodePolishCharacters(code)}  options={{ format: 'code128' }} key={code}/>
                })
            }
        </div> 
    )
}