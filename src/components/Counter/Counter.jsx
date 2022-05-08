import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from "./Counter.module.scss";

const Counter = ({counterName, defaultVal, handleCounter, counter}) => {

    const setCounterVal=(val)=>{
        handleCounter(counterName, val)
    }
  return (
    <div className={style.count}>
        <span>{counterName}</span>
        <span className={style.btns}>
        <button disabled={counter === 100} onClick={()=>setCounterVal(1)}>
            <FontAwesomeIcon icon={faPlus} className={style.icon} />
        </button>
        <span>{counter}</span>
        <button disabled={counter === defaultVal} onClick={()=>setCounterVal(-1)}>
            <FontAwesomeIcon icon={faMinus} className={style.icon} />
        </button>
        </span>
    </div>
  )
}

export default Counter