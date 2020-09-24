import {useDebounce,useTimeoutFn} from 'react-use'
import React, {useState} from "react"
const Demo = () => {
    const [state, setState] = React.useState('Typing stopped');
    const [val, setVal] = React.useState('');
    const [debouncedValue, setDebouncedValue] = React.useState('');
  console.log('1===>',1);
    const [, cancel] = useDebounce(
      () => {
          console.log('2222===>',2222);
        setState('Typing stopped');
        setDebouncedValue(val);
      },
      1000,
      [val]
    );
  
    return (
      <div>
        jenkins + docker ^ ~ ^ ...
        {/* <input
          type="text"
          value={val}
          placeholder="Debounced input"
          onChange={({ currentTarget }) => {
            setState('Waiting for typing to stop...');
            setVal(currentTarget.value);
          }}
        />
        <div>{state}</div>
        <div>
          Debouncedfsssssssssssssssssssssssssssssssssssssssssssss value: {debouncedValue}
          <button onClick={cancel}>Cancel debounce</button>
        </div> */}
      </div>
    );
  };
export default Demo