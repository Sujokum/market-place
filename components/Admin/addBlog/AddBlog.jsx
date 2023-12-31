import React , {useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import {Storage} from 'aws-amplify'
import { useRouter } from 'next/navigation'
const AddBlog = () => {
    const router = useRouter()
    const [blogImg , setBlogImg] = useState(null)
    const [error , setError] = useState({
        title : false,
        img : false,
        desc  : false

    })
    const [blog , setBlog ] = useState({
        title : '',
        desc  : ''
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
    const postData = async ()=>{
   

        try {
            if(blog.title === ''){
                setError({
                    title : true,
                    desc : false,
                    img : false
                })
            }
            if(blog.desc === ''){
                setError({
                    title : false,
                    desc : true,
                    img : false
                })
            }
            if(!blogImg){
                setError({
                    title : false,
                    desc : false,
                    img : true
                })
            }
            if(blog.title || blog.desc || blogImg){

            
            const result2 = await Storage.put(blogImg.name  , blogImg ,{
                level : 'public',
                contentType : blogImg.type
              } );
              const image  = result2.key;

            const id = uuidv4();

            const params = {
                id : id,
                title : blog.title,
                blogDesc : blog.desc,
                blogImg : image
            }

            const res = await axios.post('https://yz9wziqo31.execute-api.eu-north-1.amazonaws.com/master/api/blog' , params)
 
            if(res.status === 200){
                router.push('/admin/allblogs', { scroll: false })
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
                    <h6 className="mb-4 text-light">Add Blogs</h6>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Title</label>
                            <input type="text" className="form-control lightGray bgDark border-0" onChange={(e)=>setBlog({...blog , title : e.target.value})} value={blog.title} id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                                                {error  && error.title && <small className='textPrimary' >Must Add Title</small>}


                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label lightGray">Featured Image</label>
                            <input onChange={(e)=>setBlogImg(e.target.files[0])}  className="form-control bg-dark border-0" type="file" id="formFile" />
                            {error  && error.img && <small className='textPrimary' >Image Must Bhi Attached</small>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="imagePreview" className="form-label lightGray">Image Preview:</label>
                            <img src="" alt="Image Preview" id="imagePreview"
                                style={{maxWidth: "100%" , maxHeight: "200px"}} />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="Desc" className="form-label lightGray">Description</label>
                            <textarea id='Desc' onChange={(e)=>setBlog({...blog , desc : e.target.value})}  className='w-100 bg-dark lightGray p-2 rounded' rows={10} style={{
                                resize : 'none',
                                border : 'none',
                                outline : 'none'
                            }} >

                            </textarea>
                            {error  && error.desc && <small className='textPrimary' >Must Add Description</small>}
                
                        </div>

                        <button onClick={postData} type="submit" className="btn text-center text-light bgPrimary">Add Blog/ Update Blog</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddBlog