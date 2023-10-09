import React, { useState } from 'react'
import { Auth } from 'aws-amplify';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
const SignUp = () => {
    const router = useRouter()
    const [signupFields , setSignupFields ] = useState({
        name : '',
        email : '',
        password : '',
        code  : ''
    })
    const [verifyStep , setVerifyStep ]= useState(false)
    const [validate , setValidate] = useState({
        email : false,
        name : false,
        password : false,
        code : false
    })

    const handleSignup = async ()=>{
       const {name , email , password} =  signupFields;
       try {

        if(!name){
            return setValidate({...validate , name : true})
        }
        
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const valid =  emailPattern.test(email)
   
        if(!email || !valid){

            return setValidate({...validate , email : true})
        }


        if(!password || password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) ){
            return setValidate({...validate , password : true})
        }

        const { user } = await Auth.signUp({
          username : name,
          password,
          attributes: {
            email,          // optional
            
          },
          autoSignIn: { // optional - enables auto sign in after user is confirmed
            enabled: true,
          }
        });
        console.log(user);
        if(user){
            setVerifyStep(true)
        }
      } catch (error) {
        setValidate({
            name : true,
            email : true ,
            password : true
        })
        console.log('error signing up:', error);
      }
    }



    const handleVerify = async ()=>{
        const {name , code } = signupFields;
        if(!code){
            return setValidate({...validate , code : true})
        }
        try {
            const username = name;
            await Auth.confirmSignUp(username, code);
            console.log('sign up ')
            router.push('/signin', { scroll: false })
          } catch (error) {
            setValidate({...validate , code : true})
            console.log('error confirming sign up', error);
          }
    }
    

    return (
     
    <div className="container-fluid">
    <div className="row h-100 align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            {!verifyStep ? (
            <div className="bgSecondary rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    
                        <h3 className="textPrimary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
                
                    <h3 className='text-light' >Sign Up</h3>
                </div>
                <div className="form mb-3">
                    <label htmlFor="floatingText" className='mb-2 lightGray'>Username</label>
                    <input  onChange={(e)=>setSignupFields({...signupFields ,name : e.target.value})} value={signupFields.name}  type="text" className={`form-control lightGray bgDark ${validate.name ? 'border border-danger' : 'border-0'} `} id="floatingText" placeholder="jhondoe" />
                    { validate.name && <small className='textPrimary'>User name is empty</small>}
                </div>
                <div className="form mb-3">
                    <label htmlFor="floatingInput" className='mb-2 lightGray' >Email address</label>
                    <input type="email" onChange={(e)=>setSignupFields({...signupFields ,email : e.target.value})} value={signupFields.email} className="form-control lightGray bgDark border-0" id="floatingInput" placeholder="name@example.com" />
                    { validate.email && <small className='textPrimary'>Email is empty Or Invalid</small>}
                </div>
                <div className="form mb-4">
                    <label htmlFor="floatingPassword" className='mb-2 lightGray' >Password</label>
                    <input type="password" onChange={(e)=>setSignupFields({...signupFields ,password : e.target.value})} value={signupFields.password} className="form-control lightGray bgDark border-0" id="floatingPassword" placeholder="Password" />
                    { validate.password && <small className='textPrimary'>Password should be 8 characher with one uppercase one smallcase and one number</small>}
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input " id="exampleCheck1" />
                        <label className="form-check-label lightGray" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <h6  className='textPrimary' >Forgot Password</h6>
                </div>
                <button type="submit" onClick={handleSignup} className="btn bgPrimary text-light py-3 w-100 mb-4">Sign Up</button>
                <p className="text-center lightGray mb-0">Already have an Account? <Link href={'/signin'} className='textPrimary'>Sign In</Link></p>
            </div>
            ) : (
                <div className="bgSecondary rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    
                        <h3 className="textPrimary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
                
                    <h3 className='text-light' >Sign Up</h3>
                </div>
                <div className="form mb-4">
                    <label htmlFor="floatingPassword" className='mb-2 lightGray' >Verification Code</label>
                    <input type="password" onChange={(e)=>setSignupFields({...signupFields ,code : e.target.value})} value={signupFields.code} className="form-control lightGray bgDark border-0" id="floatingPassword" placeholder="Password" />
                    { validate.code && <small className='textPrimary'>Fill The Valid Code</small>}
                </div>

                <button type="submit" onClick={handleVerify} className="btn bgPrimary text-light py-3 w-100 mb-4">Verify</button>
            </div>
            ) }
        </div>
    </div>
    </div>
           

  )
}

export default SignUp