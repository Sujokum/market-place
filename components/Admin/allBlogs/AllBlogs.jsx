import React , {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { editBlog} from '@/redux/reducers/blogsSlice'
import { useRouter } from 'next/navigation'


const AllBlogs = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState('');
    const [blog , setBlog] = useState(null)
    const [deleted , setDelete] = useState(false)
    const getBlog = async ()=>{
        try {
            const res = await axios.get('https://yz9wziqo31.execute-api.eu-north-1.amazonaws.com/master/api/blog')
            setBlog(res.data.Items)
            if(searchQuery !== ''){
                const lowercasedQuery = searchQuery.toLowerCase();
                const filteredData = res.data.Items.filter(item => {
                  // Customize this filtering logic as per your data structure
                  // For example, you can search for a specific property like 'name'
                  return item.title.toLowerCase().includes(lowercasedQuery);
                });
                setBlog(filteredData);
              
            }            
        } catch (error) {
            console.log(error)
            
        }
    }

const handleDelete = async (id)=>{
    try {
        
        const res = await axios.delete(`https://yz9wziqo31.execute-api.eu-north-1.amazonaws.com/master/api/blog/${id}`)
        if(res.status === 200){
            setDelete(!deleted)
        }
    } catch (error) {
     console.log(error)   
    }
}



useEffect(()=>{
    getBlog()
},[searchQuery , deleted])

const handleEdit = (val)=>{
    dispatch(editBlog(val))
    router.push('/admin/editblogs', { scroll: false })
}

  return (
    <div className="container-fluid pt-4 px-4">
    <div className="row bgSecondary rounded align-items-center justify-content-center mx-0">
        <form className="d-none d-md-flex m-4">
            <input className="form-control bgDark lightGray border-0" onChange={(e)=>setSearchQuery(e.target.value)} value={searchQuery} type="search" placeholder="Search" />
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
                    {
                        blog && blog.map((val , index)=>(

                    
                    <tr key={val.id}>
                        <td>{index + 1}</td>
                        <td>{val.title}</td>


                        <td>
                            <a className="btn btn-sm btn-info" onClick={()=>handleEdit(val)} >Edit</a>
                            <a className="btn btn-sm bgPrimary text-light ms-2" onClick={()=>handleDelete(val.id)} >Delete</a>
                        </td>
                    </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default AllBlogs