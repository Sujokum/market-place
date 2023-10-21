import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo-Image/logo.svg'
import Link from 'next/link'
const Nav = () => {
  return (
    <nav className="navbar px-5 bg-white navbar-expand-lg ">
  <a className="navbar-brand " href="#">
  <Image src={logo} width={100} height={100} alt='logo' style={{width : '160px'}} className=' h-auto' />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse    navbar-collapse" id="navbarSupportedContent">
    <ul style={{width : '85%' , gap : '20px'}} className="navbar-nav d-flex justify-content-center   mx-auto ">
      <li className="nav-item active">
        <Link className="nav-link OpenSan " href="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link OpenSan " href="/about">About Us</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link OpenSan " href="/offer">Offer Alert</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link OpenSan " href="/contact">Contact Us</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link OpenSan " href="/blog">Blogs</Link>
      </li>
      
    </ul>
    <div className=" my-2 ms-auto     my-lg-0">
        <ul className='navbar-nav  '>
          <li className='nav-item ' >
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link OpenSan  dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ENG
          </a>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item OpenSan " href="#">UK</a></li>
            <li><a className="dropdown-item OpenSan " href="#">PK</a></li>
            <li><a className="dropdown-item OpenSan " href="#">CHI</a></li>
          </ul>
        </li>
      </ul>
    </div>
          </li>
          <li className='nav-item ms-2' >
            <Link className='nav-link OpenSan' href="/signin">Login</Link>
          </li>
          <li className='nav-item ms-2  my-auto' >
            <Link href={'/signup'} className=' OpenSan signUpBtn '>Sign Up</Link>
          </li>
        </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav