import React from 'react'

const Calender = () => {
  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
    <div className="h-100 bgSecondary rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="mb-0 text-light">Calender</h5>
            <a style={{
                textDecoration : 'none',
                fontSize : '18px'
            }} className='textPrimary' href="">Show All</a>
        </div>
        <div id="calender"></div>
    </div>
</div>
  )
}

export default Calender