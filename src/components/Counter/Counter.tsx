import React, {FormEvent, useState} from 'react';
import s from './Counter.module.css';
import {UniversalButton} from '../UniversalButton/UniversalButton';

export const Counter = () => {
  let [counter, setCounter] = useState<number>(0);
  let [disabled, setDisabled] = useState<boolean>(true);
  let [max, setMax] = useState<number>(5)
  
  const incHandler = () => {
	if (counter !== max) {
	  setCounter(counter + 1)
	  setDisabled(false)
	}
  }
  
  const resetHandler = () => {
	setCounter(0)
	setDisabled(true)
  }
  
  const setMaxValue = (e: FormEvent<HTMLInputElement>) => {
	setMax(Number(e.currentTarget.value))
  }
  
  return (
	<div className={s.container}>
	  <h2>Simple Counter</h2>
	  <input className={s.input} value={max} type={'number'}
			 onInput={(e) => setMaxValue(e)}/>
	  <div className={s.display}>
		<h3 className={counter === max ? s.error : ''}>{counter}</h3>
	  </div>
	  <div className={s.buttonGroup}>
		<UniversalButton title={'inc'} cbHandler={incHandler}
						 isError={counter === max}/>
		<UniversalButton title={'reset'} cbHandler={resetHandler}
						 isError={disabled}/>
	  </div>
	
	</div>
  );
};