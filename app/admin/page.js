'use client'
import React , {useState } from 'react';

import SideBar from '@/components/Admin/sidebar/SideBar';
import TopNav from '@/components/Admin/topNav/TopNav';
import PieChart from '@/components/Admin/pieChart/PieChart';
import AreaChart from '@/components/Admin/areaChart/AreaChart';
import MessageSec from '@/components/Admin/messageSec/MessageSec';
import Calenders from '@/components/Admin/calender/Calender';
import Todo from '@/components/Admin/todo/Todo';
import { usePathname} from 'next/navigation'
import UpperArrow from '@/components/Admin/upperArrow/UpperArrow';
const Admin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const params = usePathname()
    const data = {
      labels: ['Amazon', 'Walmart', 'Ali Express', 'eBay'],
      values: [12, 11, 5, 9], // Replace with your data
    };
    const Areadata = {
      labels: ['2017', '2018', '2019','2020', '2021', '2022', '2023'],
      values1: [100, 150 , 200 , 250 , 270 , 280 , 300],
      values2: [50, 100, 150, 120, 80 , 200 , 150], // Replace with your data
    }
  return (
    <div className="container-fluid position-relative d-flex p-0">
    
    {/* <div id="spinner"
        className="show bgDark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border textPrimary" style={{width: "3rem" , height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
    


    <SideBar isOpen = {isOpen} params = {params}/>
  




    <div className={`content ${isOpen ? 'open' : ''} `}>

    <TopNav isOpen={isOpen} setIsOpen={setIsOpen} />
        

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
                            <h5 className="mb-0 text-bold text-light">Platforms Traffic</h5>
                            <a style={{
                                textDecoration : 'none',
                                fontSize : '18px'
                            }}  href="" className='textPrimary'>Show All</a>
                        </div>
                        <PieChart data={data} />
                    </div>

                </div>
                <div className="col-sm-12 col-xl-6">
                    <div className="bgSecondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h5 className="mb-0 text-light">Purchase Traffic</h5>

                            <a href="" style={{
                                textDecoration : 'none',
                                fontSize : '18px'
                            }} className='textPrimary'>Show All</a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="col-sm-12 col-xl-12">
                                <div className="bgSecondary rounded h-100 p-4">

                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active bgPrimary " id="pills-home-tab"
                                                data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
                                                role="tab" aria-controls="pills-home"
                                                aria-selected="true">Day</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link textPrimary  " id="pills-profile-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-profile" type="button" role="tab"
                                                aria-controls="pills-profile" aria-selected="false">Month</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link textPrimary " id="pills-contact-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-contact" type="button" role="tab"
                                                aria-controls="pills-contact" aria-selected="false">Year</button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        {/* <canvas id="salse-revenue"></canvas> */}
                        <AreaChart data={Areadata} />
                    </div>
                </div>
            </div>
        </div>
     

        <div className="container-fluid pt-4 px-4">
            <div className="bgSecondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h5 className="mb-0 text-light ">High Selling Products</h5>
                    <form className="d-none d-md-flex ms-4">
                        <input className="form-control  searchInput border-0" type="search" placeholder="Search" />
                    </form>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bgSecondary rounded h-100 p-4">

                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link bgPrimary active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab"
                                        aria-controls="pills-home" aria-selected="true">Day</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link textPrimary " id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Month</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link textPrimary " id="pills-contact-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact" type="button" role="tab"
                                        aria-controls="pills-contact" aria-selected="false">Year</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <a style={{
                                textDecoration : 'none',
                                fontSize : '18px'
                            }} className='textPrimary' href="/hotproduct.html">Show All</a>
                </div>



                <div className=" table-responsive  ">
                    <table className=" table bg-transparent bg-none  text-start align-middle table-bordered table-hover mb-0">
                        <thead className='bg-transparent'>
                            <tr >
                                <th className="text-light" scope="col">#</th>
                                <th className='text-light' scope="col">Title</th>
                                <th className='text-light' scope="col">Total Searches</th>

                                <th className='text-light' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className='lightGray' >
                            <tr>
                                <td>1</td>
                                <td>Country</td>
                                <td>1234</td>

                                <td><a className="btn btn-sm bgPrimary text-light" href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Iphone</td>
                                <td>1234</td>

                                <td><a className="btn btn-sm bgPrimary text-light" href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Iphone</td>
                                <td>1234</td>

                                <td><a className="btn btn-sm bgPrimary text-light" href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Iphone</td>
                                <td>1234</td>

                                <td><a className="btn btn-sm bgPrimary text-light" href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Iphone</td>
                                <td>1234</td>

                                <td><a className="btn btn-sm bgPrimary text-light" href="">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>





        <div className="container-fluid pt-4 px-4">
            <div className="bgSecondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h5 className="mb-0 text-light">Traffic Regions</h5>
                    <form className="d-none d-md-flex ms-4">
                        <input className="form-control searchInput border-0" type="search" placeholder="Search" />
                    </form>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bgSecondary rounded h-100 p-4">

                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link bgPrimary text-light active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab"
                                        aria-controls="pills-home" aria-selected="true">Day</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link textPrimary " id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Month</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link textPrimary " id="pills-contact-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact" type="button" role="tab"
                                        aria-controls="pills-contact" aria-selected="false">Year</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <a style={{
                                textDecoration : 'none',
                                fontSize : '18px'
                            }} className='textPrimary' href="/hotproduct.html">Show All</a>
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
                        <tbody className='lightGray' >
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
                {/* Message Section Start  */}
                            <MessageSec/>
                {/* Message Section End  */}

                    {/* Calender Start  */}
                    <Calenders/>
                  {/* Calender ENd  */}

{/* Todo List Start  */}
                <Todo/>
{/* Todo List End  */}


            </div>
        </div>
     
    </div>
   
    <UpperArrow/>
</div>
  )
}

export default Admin