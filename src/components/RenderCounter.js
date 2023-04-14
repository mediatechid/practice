import React, { useRef, useEffect, useState } from "react";

const RenderCounter = () => {

    const [message, setMessage] = useState('Hi there, how are you?');
    const counter = useRef(0);
  
  useEffect(() => {
    // Every time the component has been re-rendered,
    // the counter is incremented
    counter.current = counter.current + 1;
    console.log('call useeffect');
    
    setTimeout(() => {
        setMessage("I'm fine, thanks for asking.");
    }, 2000)
  }); 
  
  return (
    <div>
    <h1>{message}</h1>
    <h1>{`The component has been rendered ${counter.current} times`}</h1>
    </div>
  );
};

export default RenderCounter;