import React , {useEffect , useState} from 'react'
import UserImage from '../../../public/img/user.jpg'
import Image from 'next/image'
import { Auth } from 'aws-amplify';


const TopNav = ({setIsOpen , isOpen}) => {
    const [userDetails , setUserDetails] = useState({
        name : '',
    }) 

    const getData = ()=>{
        try {
            const username = localStorage.getItem('aws-username');

            setUserDetails({
                name : JSON.parse(username),
            })
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(()=>{
        getData()
    },[])
    
    async function signOut() {
        try {
          await Auth.signOut({ global: true });
        } catch (error) {
          console.log('error signing out: ', error);
        }
      }

  return (
    <nav className="navbar navbar-expand bgSecondary  navbar-dark sticky-top px-4 py-0">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                <h2 className="textPrimary mb-0"><i className="fa fa-user-edit"></i></h2>
            </a>
            <div onClick={()=>setIsOpen(!isOpen)} className="sidebar-toggler textPrimary flex-shrink-0">
                <i className="fa fa-bars"></i>
            </div>
            <form className="d-none d-md-flex ms-4">
                <input className="form-control searchInput border-0" type="search" placeholder="Search" />
            </form>
            <div className="navbar-nav align-items-center ms-auto">
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <i className="fa fa-envelope me-lg-2"></i>
                        <span className="d-none d-lg-inline-flex">Message</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end bgSecondary border-0 rounded-0 rounded-bottom m-0">
                        <a href="#" className="dropdown-item">
                            <div className="d-flex align-items-center">
                            <Image width={500} height={500} className="rounded-circle me-lg-2" src={UserImage} alt="profile pic"
                             style= {{width: "40px", height: "40px"}} />
                                <div className="ms-2">
                                    <h6 className="fw-normal text-light mb-0">someone send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <div className="d-flex align-items-center">
                            <Image width={500} height={500} className="rounded-circle me-lg-2" src={UserImage} alt="profile pic"
                             style= {{width: "40px", height: "40px"}} />
                                <div className="ms-2">
                                    <h6 className="fw-normal text-light mb-0">Jhon send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <div className="d-flex align-items-center">
                            <Image width={500} height={500} className="rounded-circle me-lg-2" src={UserImage} alt="profile pic"
                             style= {{width: "40px", height: "40px"}} />
                                <div className="ms-2">
                                    <h6 className="fw-normal text-light mb-0">Jhon send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item text-center">See all message</a>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <i className="fa fa-bell me-lg-2"></i>
                        <span className="d-none d-lg-inline-flex">Notificatin</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end bgSecondary border-0 rounded-0 rounded-bottom m-0">
                        <a href="#" className="dropdown-item">
                            <h6 className="fw-normal text-light mb-0">Profile updated</h6>
                            <small>15 minutes ago</small>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <h6 className="fw-normal text-light mb-0">New user added</h6>
                            <small>15 minutes ago</small>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <h6 className="fw-normal text-light mb-0">Password changed</h6>
                            <small>15 minutes ago</small>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item text-center">See all notifications</a>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <Image width={500} height={500} className="rounded-circle me-lg-2" src={UserImage} alt="profile pic"
                             style= {{width: "40px", height: "40px"}} />
                        <span className="d-none d-lg-inline-flex">{userDetails.name}</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end bgSecondary border-0 rounded-0 rounded-bottom m-0">
                        <a href="#" className="dropdown-item">My Profile</a>
                        <a href="#" className="dropdown-item">Settings</a>
                        <a href="#" className="dropdown-item" onClick={signOut}>Log Out</a>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default TopNav