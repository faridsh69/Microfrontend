// import { App } from 'src/App'
// import { Menu } from 'src/components/pages/Menu'

import { useState } from 'react'

export const Test = () => {
  const [count, setCount] = useState(30)

  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  // useEffect(() => {
  //   console.log('w')
  // }, [])

  return <div onClick={handleClick}>Test {count}</div>
}
