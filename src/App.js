import React, { useState, useEffect } from 'react';

const MyDiv = () => {
  const [count, setCount] = useState(0)
  const clickHandler = () => { setCount(count + 1); console.log(`clicked ${count}`) }
  return (
    <div onClick={clickHandler}>
      ClickMe {count}
    </div>
  )
}

export const App = () => {
  return MyDiv();
}

export { App as default, MyDiv }
