import React , {useState} from 'react'
import Link from 'next/link'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/navigation'
const SignIn = () => {
    const router = useRouter()
    const [sininFields , setSigninFields] = useState({
        email : '',
        password : ""
    })

    const [validate , setValidate] = useState({
        email : false,
        password : false
    })


    const handleSignin = async ()=>{
        const {email , password} = sininFields;


   
        if(!email){

            return setValidate({...validate , email : true})
        }


        if(!password || password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) ){
            return setValidate({...validate , password : true})
        }


        try {
            const username = email;
            const user = await Auth.signIn(username, password);
            const res = user?.signInUserSession?.idToken?.payload
            const groups = res['cognito:groups'];
            // console.log(res);
            
            if(!groups && groups !== 'admin'){
                router.push('/', { scroll: false })
            }else{
                router.push('/admin', { scroll: false })
            }
            
          } catch (error) {
            console.log('error signing in', error);
          }
    }

    return (
    <div className="container-fluid">
    <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bgSecondary rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    
                        <h3 className="textPrimary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
                    
                    <h3 className='text-light' >Sign In</h3>
                </div>
                <div className="form mb-3">
                    <label htmlFor='floatingInput' className='lightGray mb-2'>User Name</label>
                    <input type="text" onChange={(e)=>setSigninFields({...sininFields , email : e.target.value})} value={sininFields.email}  className="form-control bgDark lightGray border-0" id="floatingInput" placeholder="Enter your UserName" />
                </div>
                <div className="form mb-4">
                    <label className='lightGray mb-2' htmlFor="floatingPassword">Password</label>
                    <input type="password" onChange={(e)=>setSigninFields({...sininFields , password : e.target.value})} value={sininFields.password} className="form-control bgDark lightGray border-0" id="floatingPassword" placeholder="Enter Your Password" />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                        <label className="form-check-label lightGray " htmlFor="exampleCheck1">Check me out</label>
                        <input type="checkbox" className="form-check-input " id="exampleCheck1" />
                    </div>
                    <h6 className='textPrimary'>Forgot Password</h6>
                </div>
                <button type="submit" onClick={handleSignin} className="btn bgPrimary text-light py-3 w-100 mb-4">Sign In</button>
                <p className="text-center lightGray mb-0">Don't have an Account? <Link href={'/signup'} className='textPrimary' >Sign Up</Link></p>
            </div>
        </div>
    </div>
</div>
  )
}

export default SignIn


