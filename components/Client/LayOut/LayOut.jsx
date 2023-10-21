import React from 'react'
import Nav from './Navbar/Nav'
import Foo from './Footer/Foo'
const LayOut = ({children}) => {
  return (
    <main className='d-flex flex-column' style={{minHeight : '100vh'}} >
        <Nav/>
        {children}
        <Foo/>
    </main>
  )
}

export default LayOut