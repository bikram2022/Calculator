import React from "react";
import { CalcContext } from "../context/CalContext";
import { useContext } from "react";

function getClass(value) {
    switch (value) {
        case '=': return "equal";
            break;
        case '+':
        case '-':
        case '/':
        case '%':
        case '*': return "operator"
        default: return "";
    }
}

function Button(props) {

    let { calc, setCalc } = useContext(CalcContext);

    function handleNumber(){

            setCalc({...calc,
            num: calc.num?String(calc.num) + props.value:props.value});
        
    }

    function handleComma() {
        String(calc.num).includes(".") ? setCalc({ ...calc }) : setCalc({
            ...calc,
            num: calc.num + "."
        })
        
    }
    function handleOperation(){
        setCalc({
            sign: props.value,
            res: !calc.res && calc.num?calc.num:calc.res,
            num: 0
        })
    }
    function handleCancel(){
        setCalc({
            sign:'',
            res:0,
            num:0
        })
    }
    function handleDelete(){
        setCalc({
            ...calc,
            num:String(calc.num).slice(0,-1)})
    }
    function handleEquals(){

        function math(op1,op2,sign){
            const result = {
                '+': (op1, op2)=> Number(op1) + Number(op2),
                '-': (op1, op2)=> op1 - op2,
                '*': (op1, op2)=> op1 * op2,
                '/': (op1, op2)=> op1 / op2,
            }
            return result[sign](op1,op2);
        }

        setCalc({
            res: math(calc.res, calc.num, calc.sign),
            sign: '',
            num: 0
        })
    }
    function  handleSignChange(){
        setCalc({
            ...calc,
            num: calc.num*(-1)
        })
    }
    function handleButtonClick() {
        let result = {
            '.': handleComma,
            '/': handleOperation,
            '*': handleOperation,
            '+': handleOperation,
            '-': handleOperation,
            '+-': handleSignChange,
            'c': handleCancel,
            '⌫': handleDelete,
            '=': handleEquals
        }
        if (result[props.value]) {
            result[props.value]();
        }
        else {
            handleNumber();
        }
    }

    return (<button className={`${getClass(props.value)} button`} onClick={handleButtonClick} value={props.value}>{props.children}</button>)
}
export default Button;