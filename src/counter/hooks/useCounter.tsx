import { useState } from "react";


export const useCounter = (initialValue:number = 10)=>{
    const [counter,setCounter] = useState(initialValue);

    const handleAdd = ()=>{
        setCounter((prevState)=> prevState+1);
    }

    const handleSubstrack = () =>{
        setCounter((prevState)=> prevState>0?prevState-1:0)
    }
    const handleReset = ()=>{
        setCounter(initialValue)
    }

    return{
        //values / props
         // counter:counter
        counter,
        //methods / actions
        handleAdd,
        handleSubstrack,
        handleReset,
    }
}