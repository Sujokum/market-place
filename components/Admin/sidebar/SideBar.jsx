import React from 'react'

const SideBar = ({isOpen}) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}  pe-4 pb-3`}>
    <nav className="navbar text-light navbar-dark">

        <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
                <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}} />
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
            <a href="index.html" className="nav-item nav-link active"><i
                    className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
            <hr />
            <h6 style={{textAlign: "center"}}> Customer Messages</h6>
            <hr />
            <a href="message.html" className="nav-item nav-link  "><i className="fa fa-envelope me-2"></i>Messages</a>


            <a href="offeralert.html" className="nav-item nav-link "><i className="fa fa-bell me-2"></i>Offer
                Message</a>


            <hr />
            <h6 style={{textAlign: "center"}}> Admin Replies</h6>
            <hr />
            <a href="sentbox.html" className="nav-item nav-link  "><i className="fa fa-paper-plane me-2"></i>Send
                Messages</a>
            <a href="sentofferalert.html" className="nav-item nav-link "><i className="fa fa-bell me-2"></i>Send Offer
                Alert</a>

            <hr />

            <h6 style={{textAlign: "center"}}> APIs</h6>
            <hr />
            <a href="apiedit.html" className="nav-item nav-link  "><i className="fa fa-cogs me-2"></i>APIs Setting</a>


            <hr/>


            <h6 style={{textAlign: "center"}}> Products</h6>
            <hr />
            <a href="addproduct.html" className="nav-item nav-link  "><i className="fa fa-shopping-bag me-2"></i>Add
                Product</a>

            <a href="hotproduct.html" className="nav-item nav-link  "><i className="fa fa-fire me-2"></i>Hot
                Product</a>
            <hr />
            <h6 style={{textAlign: "center"}}> Blogs</h6>
            <hr />
            <a href="addblog.html" className="nav-item nav-link  "><i className="fa fa-pen me-2"></i>Add
                Blogs</a>

            <a href="allblog.html" className="nav-item nav-link  "><i className="fa fa-comment me-2"></i>All
                Blogs</a>
            <hr />

        </div>
    </nav>
</div>
  )
}

export default SideBar