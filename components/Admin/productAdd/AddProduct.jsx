import React , {useState ,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import {Storage} from 'aws-amplify'
import { useRouter } from 'next/navigation'


const AddProduct = () => {
    const router = useRouter();
    const [productImg , setProductImg] = useState(null)
    const [error , setError] = useState({
        title : false,
        subTitle : false,
        discount : false,
        offer : false,
        reviews : false,
        rating : false,
        totalSold : false,
        shipTime : false,
        price : false,
        shipCost : false,
        totalCost : false,
        img : false
    })
    const [addProduct , setAddProduct] = useState({
        title : '',
        subTitle : '',
        discount : 0,
        offer : '',
        reviews : '',
        rating : '',
        totalSold : '',
        shipTime : '',
        price : '',
        shipCost : '',
        totalCost : ''


    })




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



const handleAddProduct = async ()=>{
 console.log(addProduct)           
 try {
    if(productImg === null){
        setError({ 
            ...error ,
            img : true
        })
    }
    if(addProduct.title === ''){
        setError({ 
            ...error ,
            title : true
        })
    }
    if(addProduct.subTitle === ''){
        setError({ 
            ...error ,
            subTitle : true
        })
    }
    if(addProduct.discount === ''){
        setError({ 
            ...error ,
            discount : true
        })
    }
    if(addProduct.offer === ''){
        setError({ 
            ...error ,
            offer : true
        })
    }
    if(addProduct.reviews === ''){
        setError({ 
            ...error ,
            reviews : true
        })
    }
    if(addProduct.rating === ''){
        setError({ 
            ...error ,
            rating : true
        })
    }
    if(addProduct.totalSold === ''){
        setError({ 
            ...error ,
            totalSold : true
        })
    }
    if(addProduct.shipTime === ''){
        setError({ 
            ...error ,
            shipTime : true
        })
    }
    if(addProduct.price === ''){
        setError({ 
            ...error ,
            price : true
        })
    }
    if(addProduct.shipCost === ''){
        setError({ 
            ...error ,
            shipCost : true
        })
    }
    if(addProduct.totalCost === ''){
        setError({ 
            ...error ,
            totalCost : true
        })
    }


    if(productImg || addProduct.title || addProduct.subTitle || addProduct.totalCost || addProduct.shipCost  || addProduct.price || addProduct.shipTime || addProduct.totalSold || addProduct.rating || addProduct.reviews || addProduct.offer || addProduct.discount  ){

            
        const result2 = await Storage.put(productImg.name  , productImg ,{
            level : 'public',
            contentType : productImg.type
          } );
          const image  = result2.key;

        const id = uuidv4();

        const params = {
            id : id, 
            productImg : image ,
            searchProduct : '2',
            productTotalCost : addProduct.totalCost,
            productTitle : addProduct.title,
            productSubTitle : addProduct.subTitle,
            productSold : addProduct.totalSold,
            productShippingTime : addProduct.shipTime,
            productShippingCost : addProduct.shipCost,
            productReview : addProduct.reviews,
            productRating : addProduct.rating,
            productPrice : addProduct.price,
            productOffer : addProduct.offer,
            productDiscount : addProduct.discount,
          
        }

        console.log(params)
        const res = await axios.post('https://yz9wziqo31.execute-api.eu-north-1.amazonaws.com/master/api/products' , params)

        if(res.status === 200){
            router.push('/admin/hotproduct', { scroll: false })
        }
    }
    
 } catch (error) {
    console.log(error)
 }
}




    return (
    <div className="container-fluid pt-4 px-4">
    <div className=" bgSecondary rounded row  align-items-center justify-content-center  p-4">
        <div>
            <div className="col-sm-12 col-xl-12">
                <div className="bgSecondary rounded h-100 p-4">
                    <h6 className="mb-4 text-light">Add Featured Product</h6>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label lightGray">Add Image</label>
                            <input className="form-control bgDark lightGray border-0 "  onChange={(e)=>setProductImg(e.target.files[0])}  type="file" id="formFile" />
                            {error  && error.img && <small className='textPrimary' >Must Add Image</small>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="imagePreview" className="form-label lightGray">Image Preview:</label>
                            <img src="" alt="Image Preview" id="imagePreview"
                                style={{maxWidth: "100%" , maxHeight : "200px"}} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Title</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " onChange={(e)=>setAddProduct({...addProduct , title : e.target.value})} value={addProduct.title} id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                            {error  && error.title && <small className='textPrimary' >Must Add Title</small>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Sub Title</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " onChange={(e)=>setAddProduct({...addProduct , subTitle : e.target.value})} value={addProduct.subTitle} id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                            {error  && error.subTitle && <small className='textPrimary' >Must Sub Add Title</small>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Discount</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e)=>setAddProduct({...addProduct , discount : e.target.value})} value={addProduct.discount}  />
                                {error  && error.discount && <small className='textPrimary' >Must Add Discount</small>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Offer</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e)=>setAddProduct({...addProduct , offer : e.target.value})} value={addProduct.offer} />
                            {error  && error.offer && <small className='textPrimary' >Must Add Offer</small>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Total reviews</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e)=>setAddProduct({...addProduct , reviews : e.target.value})} value={addProduct.reviews} />
                            {error  && error.reviews && <small className='textPrimary' >Must Add Reviews</small>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Rating</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e)=>setAddProduct({...addProduct , rating : e.target.value})} value={addProduct.rating} />
                                                    {error  && error.rating && <small className='textPrimary' >Must Add Rating</small>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Total Sold</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e)=>setAddProduct({...addProduct , totalSold : e.target.value})} value={addProduct.totalSold} />
                                {error  && error.totalSold && <small className='textPrimary' >Must Add Rating</small>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Shipping Time</label>
                            <input type="text" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e)=>setAddProduct({...addProduct , shipTime : e.target.value})} value={addProduct.shipTime} />
  {error  && error.shipTime && <small className='textPrimary' >Must Add Rating</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Product Price</label>
                            <input type="number" className="form-control bgDark lightGray border-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e)=>setAddProduct({...addProduct , price : e.target.value})} value={addProduct.price} />
  {error  && error.price && <small className='textPrimary' >Must Add Rating</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Shipping Cost</label>
                            <input type="number" className="form-control bgDark lightGray border-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e)=>setAddProduct({...addProduct , shipCost : e.target.value})} value={addProduct.shipCost} />
{error  && error.shipCost && <small className='textPrimary' >Must Add Rating</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Total Cost</label>
                            <input type="number" className="form-control bgDark lightGray border-0 " id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e)=>setAddProduct({...addProduct , totalCost : e.target.value})} value={addProduct.totalCost} />
{error  && error.totalCost && <small className='textPrimary' >Must Add Rating</small>}
                        </div>

                        <button type="submit" className="btn bgPrimary text-light" onClick={handleAddProduct}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
</div>
  )
}

export default AddProduct