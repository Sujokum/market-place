import React from "react";
import Image from "next/image";
import logo from "@/public/logo-Image/logo.svg";
import Link from "next/link";
import {FaLocationDot} from 'react-icons/fa6'
import {IoIosCall} from 'react-icons/io'
import {IoMailSharp} from 'react-icons/io5'
import {AiFillTwitterCircle , AiFillInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import style from "./foo.module.css";
const Foo = () => {
  return (
    <div className={`${style.bgGray} mt-auto px-5 container-fluid`}>
      <div className="row">
        <div className="col-12">
          <Image
            src={logo}
            style={{ width: "170px" }}
            alt="LOGO"
            height={100}
            width={100}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 col-lg-3 ">
          <div className="row">
            <div className="col-12">
              <h1  className={` ${style.heading} text-white`}>Helper Mall</h1>
            </div>
            <div className="col-12">
              <p className="text-white">
                Welcome to HELPER MALLYour trusted destination for quality and
                affordable products. We handpick the finest items, offer
                personalized recommendations, and ensure a scam-free shopping
                experience. Shop confidently, explore unbeatable variety, and
                join our thriving community. Your desires fulfilled,
                effortlessly. Happy shopping!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-lg-3">
          <div className="row">
            <div className="col-12">
              <h1  className={` ${style.heading} text-white`}>Links</h1>
            </div>
            <div className="col-12">
              <Link href ='/' className = {style.link} >Home</Link>
            </div>
            <div className="col-12">
              <Link href ='/about' className = {style.link} >About Us</Link>
            </div>
            <div className="col-12">
              <Link href ='/contact' className = {style.link} >Contact Us</Link>
            </div>
            <div className="col-12">
              <Link href ='/blog' className = {style.link} >Blogs</Link>
            </div>

          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-lg-3">
          <div className="row">
            <div className="col-12">
              <h1  className={` ${style.heading} text-white`}>Help</h1>
            </div>
            <div className="col-12">
              <p className="text-white">Terms of Use</p>
            </div>
            <div className="col-12">

              <p className="text-white">Provicy Police</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-lg-3">
          <div className="row">
            <div className="col-12 ">
              <h1  className={` ${style.heading} text-white`}>Contacts</h1>
            </div>
            <div className="col-12 text-white d-flex">
             <span className={style.icon}><FaLocationDot/></span>  <p className="ms-2">Pakistan</p>
            </div>
            <div className="col-12 text-white d-flex">
             <span className={style.icon} ><IoIosCall/></span>  <p  className="ms-2" >+39 15465464</p>
            </div>
            <div className="col-12 text-white d-flex">
             <span className={style.icon}><IoMailSharp/></span>  <p className="ms-2">helpermall@gmail.com</p>
            </div>
          </div>
          <div className="row mt-3">
        <div className="col-12 d-flex gap-2" >
            <h1 className={`${style.heading} text-white`}>Social Media</h1>
            <h5 className={style.icon}> <AiFillTwitterCircle/></h5>
            <h5 className={style.icon}><FaFacebook/></h5>
            <h5 className={style.icon}><AiFillInstagram/></h5>
        </div>

      </div>
        </div>
      </div>
      <div className="row py-2">
        <footer className="col-12 text-center text-white" >Copyright © 2022.  All rights reserved.</footer>
      </div>
     
    </div>
  );
};

export default Foo;
