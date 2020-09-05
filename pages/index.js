import React from 'react'

const hello = ({ cookies = {}}) => {
  console.log(cookies)
  
  let contentDOM = (
    <h1>HELLO</h1>
  )

  return contentDOM
}

export default hello