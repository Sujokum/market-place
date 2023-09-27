import React from 'react'

const AllBlogs = () => {
  return (
    <div className="container-fluid pt-4 px-4">
    <div className="row bgSecondary rounded align-items-center justify-content-center mx-0">
        <form className="d-none d-md-flex m-4">
            <input className="form-control bgDark border-0" type="search" placeholder="Search" />
        </form>
        <div className="table-responsive">


            <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                    <tr className="text-light">
                        <th scope="col">#</th>
                        <th scope="col">Title</th>

                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className='lightGray' >
                    <tr>
                        <td>1</td>
                        <td>Iphone</td>


                        <td>
                            <a className="btn btn-sm btn-info" href="">Edit</a>
                            <a className="btn btn-sm bgPrimary text-light ms-2" href="">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone</td>


                        <td>
                            <a className="btn btn-sm btn-info" href="">Edit</a>
                            <a className="btn btn-sm bgPrimary text-light ms-2" href="">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Iphone</td>


                        <td>
                            <a className="btn btn-sm btn-info" href="">Edit</a>
                            <a className="btn btn-sm bgPrimary text-light ms-2" href="">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Iphone</td>


                        <td>
                            <a className="btn btn-sm btn-info" href="">Edit</a>
                            <a className="btn btn-sm bgPrimary text-light ms-2" href="">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Iphone</td>


                        <td>
                            <a className="btn btn-sm btn-info" href="">Edit</a>
                            <a className="btn btn-sm bgPrimary text-light ms-2" href="">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Iphone</td>


                        <td>
                            <a className="btn btn-sm btn-info" href="">Edit</a>
                            <a className="btn btn-sm bgPrimary text-light ms-2" href="">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Iphone</td>

                        <td>
                            <a className="btn btn-sm btn-info" href="">Edit</a>
                            <a className="btn btn-sm bgPrimary text-light ms-2" href="">Delete</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default AllBlogs