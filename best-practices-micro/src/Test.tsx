// import { App } from 'src/App'

import { useState } from 'react'

export const Test = () => {
  const [count, setCount] = useState<number>(30)

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  return <div onClick={handleClick}>5 Testx {count}</div>
}
