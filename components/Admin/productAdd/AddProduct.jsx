import React , {useEffect} from 'react'

const AddProduct = () => {

useEffect(()=>{
    const fileInput = document.getElementById('formFile');
    const imagePreview = document.getElementById('imagePreview');

    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                imagePreview.src = e.target.result;
            };

            reader.readAsDataURL(file);
        } else {
            // Clear the image preview if no file is selected
            imagePreview.src = "";
        }
    });
},[])

    return (
    <div className="container-fluid pt-4 px-4">
    <div className=" bgSecondary rounded row  align-items-center justify-content-center  p-4">
        <div>
            <div className="col-sm-12 col-xl-12">
                <div className="bgSecondary rounded h-100 p-4">
                    <h6 className="mb-4 text-light">Add Featured Product</h6>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label lightGray">Add Image</label>
                            <input className="form-control bgDark lightGray border-0 " type="file" id="formFile" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="imagePreview" className="form-label lightGray">Image Preview:</label>
                            <img src="" alt="Image Preview" id="imagePreview"
                                style={{maxWidth: "100%" , maxHeight : "200px"}} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Title</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Sub Title</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Discount</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Offer</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Total reviews</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Rating</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Total Sold</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Shipping Time</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Product Price</label>
                            <input type="number" className="form-control bgDark lightGray border-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Shipping Cost</label>
                            <input type="number" className="form-control bgDark lightGray border-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Total Cost</label>
                            <input type="number" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>

                        <button type="submit" className="btn bgPrimary text-light">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
</div>
  )
}

export default AddProduct