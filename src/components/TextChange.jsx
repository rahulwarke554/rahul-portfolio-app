import React from 'react'
import {useState, useEffect} from 'react'

const TextChange = () => {
  const text = ["Hi, I'm Rahul...","Hi, I'm Rahul...", "Hi, I'm Rahul..."];
  const [currText, setCurrText] = useState("");
  const [endVal, setEndVal] = useState(true);
  const [isForword, setIsForword] = useState(true);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrText(text[index].substring(0,endVal));
      if(isForword){
        setEndVal((prev)=>prev+1)
      }else{
        setEndVal((prev)=>prev-1)
      }
      if(endVal > text[index].length+10){
        setIsForword(false);
      }
      if(endVal < 2.1){
        setIsForword(true);
        setIndex((prev)=>prev&text.length);
      }
    }, 50);  
    return ()=>clearInterval(interval);
  }, [endVal, isForword,index,text ])
  
  return (
    <div className="transition ease duration-300">{currText}</div>
  )
}

export default TextChange