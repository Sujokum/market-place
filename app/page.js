"use client"
import React , {useState} from 'react'
import SideBar from '@/components/Admin/sidebar/SideBar';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container-fluid position-relative d-flex p-0">
    
    {/* <div id="spinner"
        className="show bgDark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border textPrimary" style={{width: "3rem" , height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
    


    <SideBar isOpen = {isOpen}/>
  




    <div className={`content ${isOpen ? 'open' : ''} `}>

        <nav className="navbar navbar-expand bgSecondary navbar-dark sticky-top px-4 py-0">
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
                                <img className="rounded-circle" src="img/user.jpg" alt=""
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
                                <img className="rounded-circle" src="img/user.jpg" alt=""
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
                                <img className="rounded-circle" src="img/user.jpg" alt=""
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
                        <img className="rounded-circle me-lg-2" src="img/user.jpg" alt=""
                             style= {{width: "40px", height: "40px"}} />
                        <span className="d-none d-lg-inline-flex">Muhammad Azeem</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end bgSecondary border-0 rounded-0 rounded-bottom m-0">
                        <a href="#" className="dropdown-item">My Profile</a>
                        <a href="#" className="dropdown-item">Settings</a>
                        <a href="#" className="dropdown-item">Log Out</a>
                    </div>
                </div>
            </div>
        </nav>

        <div className="container-fluid text-light pt-4 px-4">
            <div className="row g-4">
                <div className="col-sm-6 col-xl-4">
                    <div className="bgSecondary rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-chart-line fa-3x textPrimary"></i>
                        <div className="ms-3">
                            <p className="mb-2 lightGray">Website Traffic</p>
                            <h6 className="mb-0">1234</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <div className="bgSecondary rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-chart-bar fa-3x textPrimary"></i>
                        <div className="ms-3">
                            <p className="mb-2 lightGray">Search Products</p>
                            <h6 className="mb-0">1234</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <div className="bgSecondary rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-chart-area fa-3x textPrimary"></i>
                        <div className="ms-3">
                            <p className="mb-2 lightGray">Buy Button</p>
                            <h6 className="mb-0">1234</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
                <div className="col-sm-12 col-xl-6">
                    <div className="bgSecondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Platforms Traffic</h6>
                            <a href="">Show All</a>
                        </div>
                        <canvas id="worldwide-sales"></canvas>
                    </div>

                </div>
                <div className="col-sm-12 col-xl-6">
                    <div className="bgSecondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Purchase Traffic</h6>

                            <a href="">Show All</a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="col-sm-12 col-xl-12">
                                <div className="bgSecondary rounded h-100 p-4">

                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab"
                                                data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
                                                role="tab" aria-controls="pills-home"
                                                aria-selected="true">Day</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-profile" type="button" role="tab"
                                                aria-controls="pills-profile" aria-selected="false">Month</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-contact" type="button" role="tab"
                                                aria-controls="pills-contact" aria-selected="false">Year</button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <canvas id="salse-revenue"></canvas>
                    </div>
                </div>
            </div>
        </div>
     

        <div className="container-fluid pt-4 px-4">
            <div className="bgSecondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">High Selling Products</h6>
                    <form className="d-none d-md-flex ms-4">
                        <input className="form-control  searchInput border-0" type="search" placeholder="Search" />
                    </form>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bgSecondary rounded h-100 p-4">

                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab"
                                        aria-controls="pills-home" aria-selected="true">Day</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Month</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact" type="button" role="tab"
                                        aria-controls="pills-contact" aria-selected="false">Year</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <a href="/hotproduct.html">Show All</a>
                </div>



                <div className="table-responsive">
                    <table className="table text-start align-middle table-bordered table-hover mb-0">
                        <thead>
                            <tr className="text-white">
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Total Searches</th>

                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Country</td>
                                <td>1234</td>

                                <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Iphone</td>
                                <td>1234</td>

                                <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Iphone</td>
                                <td>1234</td>

                                <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Iphone</td>
                                <td>1234</td>

                                <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Iphone</td>
                                <td>1234</td>

                                <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>





        <div className="container-fluid pt-4 px-4">
            <div className="bgSecondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">Traffic Regions</h6>
                    <form className="d-none d-md-flex ms-4">
                        <input className="form-control searchInput border-0" type="search" placeholder="Search" />
                    </form>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bgSecondary rounded h-100 p-4">

                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab"
                                        aria-controls="pills-home" aria-selected="true">Day</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Month</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact" type="button" role="tab"
                                        aria-controls="pills-contact" aria-selected="false">Year</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <a href="/hotproduct.html">Show All</a>
                </div>
                <div className="table-responsive">
                    <table className="table text-start align-middle table-bordered table-hover mb-0">
                        <thead>
                            <tr className="text-white">
                                <th scope="col">#</th>
                                <th scope="col">Country</th>
                                <th scope="col"> Region</th>

                                <th scope="col">Total Customers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>USA</td>
                                <td>California</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>USA</td>
                                <td>California</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>USA</td>
                                <td>California</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>USA</td>
                                <td>California</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>USA</td>
                                <td>California</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>

        <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
                <div className="col-sm-12 col-md-6 col-xl-4">
                    <div className="h-100 bgSecondary rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className="mb-0">Messages</h6>
                            <a href="">Show All</a>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-3">
                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=""
                                style= {{width: "40px", height: "40px"}} />
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-3">
                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=""
                                 style= {{width: "40px", height: "40px"}} />
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-3">
                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=""
                                 style= {{width: "40px", height: "40px"}} />
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=""
                                 style= {{width: "40px", height: "40px"}} />
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-4">
                    <div className="h-100 bgSecondary rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Calender</h6>
                            <a href="">Show All</a>
                        </div>
                        <div id="calender"></div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-4">
                    <div className="h-100 bgSecondary rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">To Do List</h6>
                            <a href="">Show All</a>
                        </div>
                        <div className="d-flex mb-2">
                            <input className="form-control searchInput border-0" type="text" placeholder="Enter task" />
                            <button type="button" className="btn btn-primary ms-2">Add</button>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-2">
                            <input className="form-check-input m-0" type="checkbox" />
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-2">
                            <input className="form-check-input m-0" type="checkbox" />
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-2">
                            <input className="form-check-input m-0" type="checkbox" defaultChecked />
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <span><del>Short task goes here...</del></span>
                                    <button className="btn btn-sm textPrimary"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-2">
                            <input className="form-check-input m-0" type="checkbox"/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center pt-2">
                            <input className="form-check-input m-0" type="checkbox"/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
   
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
</div>
  )
}

export default Home