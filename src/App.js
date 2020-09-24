import React, {useEffect, useState, useCallback} from 'react';
import ValidatorComponent from './validat'
import Test1 from './test1'
const App = ()=>{
  return (
    <div><Test1/></div>
  )
}
export default App

const Parent = ()=>{
  const [count, setCount] = useState(0);
  const handleClick = ()=>{
    setCount(count=>count + 1)
  } 
  return(
    <div>
      <button onClick={handleClick}>parent按钮</button>
      <Child count={count}/>
    </div>
  )
}

const Child = ({count})=>{
  const doSomething = useCallback(()=>{
    console.log('count===>',count);
  },[])
  useEffect(() => {
    doSomething()
  }, [count]);

  return(
    <div>
      {`child::${count}`}
    </div>
  )
}