import React from 'react'

const SignUp = () => {
  return (
    <div className="container-fluid">
    <div className="row h-100 align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bgSecondary rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    
                        <h3 className="textPrimary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
                
                    <h3 className='text-light' >Sign Up</h3>
                </div>
                <div className="form mb-3">
                    <label htmlFor="floatingText" className='mb-2 lightGray'>Username</label>
                    <input type="text" className="form-control lightGray bgDark border-0" id="floatingText" placeholder="jhondoe" />
                </div>
                <div className="form mb-3">
                    <label htmlFor="floatingInput" className='mb-2 lightGray' >Email address</label>
                    <input type="email" className="form-control lightGray bgDark border-0" id="floatingInput" placeholder="name@example.com" />
                </div>
                <div className="form mb-4">
                    <label htmlFor="floatingPassword" className='mb-2 lightGray' >Password</label>
                    <input type="password" className="form-control lightGray bgDark border-0" id="floatingPassword" placeholder="Password" />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input " id="exampleCheck1" />
                        <label className="form-check-label lightGray" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <h6  className='textPrimary' >Forgot Password</h6>
                </div>
                <button type="submit" className="btn bgPrimary text-light py-3 w-100 mb-4">Sign Up</button>
                <p className="text-center lightGray mb-0">Already have an Account? <a className='textPrimary'>Sign In</a></p>
            </div>
        </div>
    </div>
</div>
  )
}

export default SignUp