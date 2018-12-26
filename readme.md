# basic react hooks example with a failing jest unit test.

**Invariant Violation: Hooks can only be called inside the body of a function component.**

[hooks](https://reactjs.org/docs/hooks-intro.html) are only alpha use at the moment. They obviously work but the above
error (Invariant violation) is seen when attempting to write a unit test. I am now at a loss about what to try next.

I believe that these small snippets

```
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
```

Testing MyDiv using react produces the error below. I have not seen jest examples
with the react alpha hooks yet.

![error](./ScreenShot.png "jest error")
