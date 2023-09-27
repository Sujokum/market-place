import React from 'react'

const Todo = () => {
  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
    <div className="h-100 bgSecondary rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="mb-0 text-light ">To Do List</h5>
            <a style={{
                textDecoration : 'none',
                fontSize : '18px'
            }} className='textPrimary' href="">Show All</a>
        </div>
        <div className="d-flex mb-2">
            <input className="form-control searchInput border-0" type="text" placeholder="Enter task" />
            <button type="button" className="btn bgPrimary text-light  ms-2">Add</button>
        </div>
        <div className="d-flex align-items-center border-bottom border-dark py-2">
            <input className="form-check-input m-0" type="checkbox" />
            <div className="w-100 ms-3">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <span className = 'lightGray' >Short task goes here...</span>
                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                </div>
            </div>
        </div>
        <div className="d-flex align-items-center border-bottom border-dark py-2">
            <input className="form-check-input m-0" type="checkbox" />
            <div className="w-100 ms-3">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <span className = 'lightGray' >Short task goes here...</span>
                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                </div>
            </div>
        </div>
        <div className="d-flex align-items-center border-bottom border-dark py-2">
            <input className="form-check-input m-0" type="checkbox" defaultChecked />
            <div className="w-100 ms-3">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <span className='lightGray' ><del>Short task goes here...</del></span>
                    <button className="btn btn-sm textPrimary"><i className="fa fa-times"></i></button>
                </div>
            </div>
        </div>
        <div className="d-flex align-items-center border-bottom border-dark py-2">
            <input className="form-check-input m-0" type="checkbox"/>
            <div className="w-100 ms-3">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <span className='lightGray' >Short task goes here...</span>
                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                </div>
            </div>
        </div>
        <div className="d-flex align-items-center pt-2">
            <input className="form-check-input  m-0" type="checkbox"/>
            <div className="w-100 ms-3">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <span className='lightGray' >Short task goes here...</span>
                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Todo