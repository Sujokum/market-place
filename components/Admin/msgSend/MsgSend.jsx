import React from 'react'

const MsgSend = ({heading}) => {
  return (
    <div className="container-fluid pt-4 px-4">
    <div className="row vh-100 bgSecondary rounded align-items-center justify-content-center mx-0">
        <div className="col-sm-12">
            <form action="">


                <div className="bgSecondary rounded h-100 p-4">
                    <h6 className="mb-4 text-light ">{heading}</h6>
                    <div className="form mb-3">
                        <label className='lightGray mb-2'>To</label>
                        <input type="email" className="form-control border-0 bgDark lightGray " 
                            placeholder="name@example.com" />
                    </div>
                    <div className="form mb-3">
                        <label className='lightGray mb-2'>Subject</label>
                        <input type="text" className="form-control border-0 bgDark lightGray" 
                            placeholder="Password" />
                    </div>

                    <div className="form">
                        <label className='lightGray mb-2 ' >Description (Send Email)</label>
                        <textarea className="form-control  border-0 bgDark lightGray" placeholder="Leave a comment here"
                            style={{height: '150px'}}></textarea>
                    </div>
                    <button type="submit" className="btn bgPrimary text-light mt-4">Add Product</button>
                </div>

            </form>
        </div>
    </div>
</div>
  )
}

export default MsgSend