import React from 'react';

type buttonProps = {
  title: string
  cbHandler: ()=> void
  isError?: boolean
}

export const UniversalButton = (props: buttonProps) => {
  let {title, cbHandler, isError} = props
  return (
	<button onClick={cbHandler} disabled={isError}>{title}</button>
  );
};