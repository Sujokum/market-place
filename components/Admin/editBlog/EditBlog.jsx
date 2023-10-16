import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {Storage} from 'aws-amplify'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
const EditBlog = () => {
    const state = useSelector(state => state.blogs.editBlogs)
    const router = useRouter()
    const [error , setError] = useState({
        img : false,
    })
    const [blogImg , setBlogImg] = useState()
    const [blog , setBlog ] = useState({
        id :  state?.id,
        title : state?.title,
        desc  : state?.blogDesc,
        img : state?.blogImg
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

            if(!blogImg){
                setError({        
                    img : true
                })
            }
            if(blog.title || blog.desc || blogImg){
   
            const result2 = await Storage.put(blogImg.name  , blogImg ,{
                level : 'public',
                contentType : blogImg.type
            } );
            const image  = result2.key;
            
       

            const params = {
                id : blog.id,
                title : blog.title,
                blogDesc : blog.desc,
                blogImg : image
            }

      
            const res = await axios.put(`https://yz9wziqo31.execute-api.eu-north-1.amazonaws.com/master/api/blog` , params)
   
            if(res.status === 200){
                router.push('/admin/allblogs', { scroll: false })
            }


        }
        } catch (error) {
            console.log(error)
        }
    }

    if(!state){
        router.push('/admin/allblogs', { scroll: false })
    }
  return (
    <div className="container-fluid pt-4 px-4">
    <div className=" bgSecondary rounded row  align-items-center justify-content-center  p-4">
        <div>
            <div className="col-sm-12 col-xl-12">
                <div className="bgSecondary rounded h-100 p-4">
                    <h6 className="mb-4 text-light">Edit Blogs</h6>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label lightGray">Title</label>
                            <input type="text" className="form-control lightGray bgDark border-0" onChange={(e)=>setBlog({...blog , title : e.target.value})} value={blog.title} id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                          
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label lightGray">Featured Image</label>
                            <input onChange={(e)=>setBlogImg(e.target.files[0])}  className="form-control bg-dark border-0" type="file" id="formFile" />
                            {error  && error.img && <small className='textPrimary' >Must Add Image</small>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="imagePreview" className="form-label lightGray">Image Preview:</label>
                            <img src={''} alt="Image Preview" id="imagePreview"
                                style={{maxWidth: "100%" , maxHeight: "200px"}} />
                     
                        </div>

                        <div className="mb-3">
                        <label htmlFor="Desc" className="form-label lightGray">Description</label>
                            <textarea id='Desc' onChange={(e)=>setBlog({...blog , desc : e.target.value})} value={blog.desc}  className='w-100 bg-dark lightGray p-2 rounded' rows={10} style={{
                                resize : 'none',
                                border : 'none',
                                outline : 'none'
                            }} >

                            </textarea>
                
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

export default EditBlog