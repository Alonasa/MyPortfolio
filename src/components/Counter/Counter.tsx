import React from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  return (
	<div className={s.container}>
	  <div className={s.display}>
		<span>0</span>
	  </div>
	  <div className={s.buttonGroup}>
		<button>inc</button>
		<button>reset</button>
	  </div>
	  
	</div>
  );
};