import React, { useState, useEffect } from 'react';


const MyMessage = () => {

  const [message, setMessage] = useState('Hi there, how are you?');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('trigger use effect hook');
    setCounter((counter) => counter+1);

    setTimeout(() => {
        setMessage("I'm fine, thanks for asking.");
    }, 1000)
  })

  return <h1>{counter}+{message}</h1>
};

export default MyMessage;