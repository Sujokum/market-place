import React from 'react'
import Link from 'next/link'
import UserImage from '../../../public/img/user.jpg'
import Image from 'next/image'
const SideBar = ({isOpen , params}) => {

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}  pe-4 pb-3`}>
    <nav className="navbar text-light navbar-dark">

        <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
                <Image width={500} height={500}  className="rounded-circle" src={UserImage} alt="asdasd" style={{width: "40px", height: "40px"}} />
                <div
                    className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1">
                </div>
            </div>
            <div className="ms-3">
                <h6 className="mb-0">Muhammad Azeem</h6>
                <span className='lightGray' >Admin</span>
            </div>
        </div>
        <div className="navbar-nav w-100">
            {/* <a href="index.html" className="nav-item nav-link active">Dashboard</a> */}
            <Link href="/admin" className={`nav-item nav-link ${params === "/admin" ? "active" : ""}  `}><i
                    className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
            <hr />
            <h6 style={{textAlign: "center"}}> Customer Messages</h6>
            <hr />
            <Link href="/admin/messages" className={`nav-item nav-link ${params === "/admin/messages" ? "active" : ""}  `}><i className="fa fa-envelope me-2"></i>Messages</Link>
            <Link href="/admin/offermessage" className={`nav-item nav-link ${params === "/admin/offermessage" ? "active" : ""}  `}><i className="fa fa-bell me-2"></i>Offer Message</Link>


            <a href="offeralert.html" className="nav-item nav-link "></a>


            <hr />
            <h6 style={{textAlign: "center"}}> Admin Replies</h6>
            <hr />
            <Link href="/admin/messageSend" className={`nav-item nav-link ${params === "/admin/messageSend" ? "active" : ""}  `}><i className="fa fa-paper-plane me-2"></i>Send Messages</Link>
            <Link href="/admin/offerAlertSend" className={`nav-item nav-link ${params === "/admin/offerAlertSend" ? "active" : ""}  `}><i className="fa fa-bell me-2"></i>Send Offer
                Alert</Link>
       
   

            <hr />

            <h6 style={{textAlign: "center"}}> APIs</h6>
            <hr />
            <Link href="/admin/apiSetting" className={`nav-item nav-link ${params === "/admin/apiSetting" ? "active" : ""}  `}><i className="fa fa-cogs me-2"></i>APIs Setting</Link>
            {/* <a href="apiedit.html" className="nav-item nav-link  "><i className="fa fa-cogs me-2"></i>APIs Setting</a> */}


            <hr/>


            <h6 style={{textAlign: "center"}}> Products</h6>
            <hr />
            <Link href="/admin/addproduct" className={`nav-item nav-link ${params === "/admin/addproduct" ? "active" : ""}  `}><i className="fa fa-shopping-bag me-2"></i>Add Product</Link>
            <Link href="/admin/hotproduct" className={`nav-item nav-link ${params === "/admin/hotproduct" ? "active" : ""}  `}><i className="fa fa-fire me-2"></i>Hot Product</Link>

            <hr />
            <h6 style={{textAlign: "center"}}> Blogs</h6>
            <hr />
            <Link href="/admin/addblogs" className={`nav-item nav-link ${params === "/admin/addblogs" ? "active" : ""}  `}><i className="fa fa-pen me-2"></i>Add Blogs</Link>
            <Link href="/admin/allblogs" className={`nav-item nav-link ${params === "/admin/allblogs" ? "active" : ""}  `}><i className="fa fa-comment me-2"></i>All Blogs</Link>
            <hr />

        </div>
    </nav>
</div>
  )
}

export default SideBar