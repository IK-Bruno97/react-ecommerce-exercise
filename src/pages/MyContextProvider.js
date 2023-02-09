import React, { useState, useEffect, useRef } from 'react'
import { MyContext } from './context';

function MyContextProvider(props) {
    const [cart, setCart] = useState(0);
    
    const count = useRef(0);

    console.log(count)

    useEffect(() => {
      count.current = count.current + 1;
    }, [cart]);

  return (
    <MyContext.Provider value={{cart, setCart, count}}>
      {props.children}
    </MyContext.Provider>
    
  )
}

export default MyContextProvider