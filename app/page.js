'use client'
import React from 'react'
import Style from './style.module.css';
import { Auth } from 'aws-amplify';


const page = () => {

  async function signOut() {
    try {
      await Auth.signOut({ global: true });
      console.log('logout')
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    
    <div className={Style.app} >
      Welcome To Client Page 
      <button onClick={signOut}>Logout</button>
    </div>
  )
}

export default page