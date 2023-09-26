import React from 'react'

const MessageSec = () => {
  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
    <div className="h-100 bgSecondary rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
            <h5 className="mb-0 text-light">Messages</h5>
            <a style={{
                textDecoration : 'none',
                fontSize : '18px'
            }} className='textPrimary' href="">Show All</a>
        </div>
        <div className="d-flex align-items-center border-bottom py-3">
            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=""
                style= {{width: "40px", height: "40px"}} />
            <div className="w-100 ms-3">
                <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-0 text-light">Jhon Doe</h6>
                    <small className='lightGray' >15 minutes ago</small>
                </div>
                <span className = 'lightGray'>Short message goes here...</span>
            </div>
        </div>
        <div className="d-flex align-items-center border-bottom py-3">
            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=""
                 style= {{width: "40px", height: "40px"}} />
            <div className="w-100 ms-3">
                <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-0 text-light ">Jhon Doe</h6>
                    <small className='lightGray' >15 minutes ago</small>
                </div>
                <span className = 'lightGray' >Short message goes here...</span>
            </div>
        </div>
        <div className="d-flex align-items-center border-bottom py-3">
            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=""
                 style= {{width: "40px", height: "40px"}} />
            <div className="w-100 ms-3">
                <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-0 text-light ">Jhon Doe</h6>
                    <small className='lightGray' >15 minutes ago</small>
                </div>
                <span className='lightGray' >Short message goes here...</span>
            </div>
        </div>
        <div className="d-flex align-items-center pt-3">
            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt=""
                 style= {{width: "40px", height: "40px"}} />
            <div className="w-100 ms-3">
                <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-0 text-light ">Jhon Doe</h6>
                    <small className='lightGray' >15 minutes ago</small>
                </div>
                <span className='lightGray' >Short message goes here...</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default MessageSec