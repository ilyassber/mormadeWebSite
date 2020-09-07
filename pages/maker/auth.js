import React from 'react'
import { Authentication } from '../../components/elements/authentication'
import { parseCookies } from '../../lib/parseCookies'

const Auth = ({ cookies = {}}) => {
  console.log(cookies)
  
  let contentDOM = (
    <Authentication cookies={cookies}/>
  )

  return contentDOM
}

Auth.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    cookies: cookies
  };
};

export default Auth