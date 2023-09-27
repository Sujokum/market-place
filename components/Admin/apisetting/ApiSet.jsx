import React from 'react'

const ApiSet = () => {
  return (
    <div className="container-fluid pt-4 px-4">
    <div className="row vh-100 bgSecondary rounded  mx-0 p-5">
        <div>
            <div className="container ">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch"
                        id="flexSwitchCheckDefault" Checked />
                    <label className="form-check-label" for="flexSwitchCheckDefault">
                        <h5 className='text-light' >Walmart API</h5>
                    </label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch"
                        id="flexSwitchCheckDefault"  />
                    <label className="form-check-label" for="flexSwitchCheckDefault">
                        <h5  className='text-light' >eBay API</h5>
                    </label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch"
                        id="flexSwitchCheckDefault" checked />
                    <label className="form-check-label" for="flexSwitchCheckDefault">
                         <h5 className='text-light' >Amazon API</h5>
                    </label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch"
                        id="flexSwitchCheckDefault" checked />
                    <label className="form-check-label" for="flexSwitchCheckDefault">
                         <h5 className='text-light' >Ali Express API</h5>
                    </label>
                </div>
            </div>


        </div>
    </div>

    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
</div>
  )
}

export default ApiSet