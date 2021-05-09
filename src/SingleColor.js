import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb ,weight , index, hexColor}) => {
 const [alert , setalert] =  useState(false)
 const bcg = rgb.join(',')
 const hex = rgbToHex(...rgb)
 useEffect(() => {
const timeout = setTimeout(()=>{
	setalert(false)
},3000)
return () => clearTimeout(timeout)
   }, [alert])  

  return (
 <article className={`color ${index > 10 && 'color-light '}`}
  style={{backgroundColor : `rgb(${bcg})`}}
  onClick = {()=>{setalert(true) 
  	navigator.clipboard.writeText(hex) }} >
 	<p className='percent-value' >{weight}%</p>
 	<p className='color-value'>{hex}</p>
 	{alert && <p className='alert'> copied </p>  }
 </article>
  	)
}

export default SingleColor
