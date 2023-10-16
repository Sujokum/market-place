import React , {useState , useEffect} from 'react'
import axios from 'axios'
const HotProduct = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products , setProducts] = useState(null);
    const [deleted , setDelete] = useState(false);
    const getProducts = async ()=>{
        try {
            const res = await axios.get('https://yz9wziqo31.execute-api.eu-north-1.amazonaws.com/master/api/products')
            setProducts(res.data.Items)
            if(searchQuery !== ''){
                const lowercasedQuery = searchQuery.toLowerCase();
                const filteredData = res.data.Items.filter(item => {
                  // Customize this filtering logic as per your data structure
                  // For example, you can search for a specific property like 'name'
                  return item.productTitle.toLowerCase().includes(lowercasedQuery);
                });
                setProducts(filteredData);
              
            }            
        } catch (error) {
            console.log(error)
            
        }
    }


    const handleDeleteProduct = async (id)=>{
        try {
        
            const res = await axios.delete(`https://yz9wziqo31.execute-api.eu-north-1.amazonaws.com/master/api/products/${id}`)
            if(res.status === 200){
                setDelete(!deleted)
            }
        } catch (error) {
         console.log(error)   
        }
    }



    useEffect(()=>{
        getProducts()
    },[searchQuery , deleted ])
  return (
    <div className="container-fluid pt-4 px-4">
    <div className="row bgSecondary rounded align-items-center justify-content-center mx-0">
        <form className="d-none d-md-flex m-4">
            <input className="form-control bgDark border-0" onChange={(e)=>setSearchQuery(e.target.value)} value={searchQuery} type="search" placeholder="Search"/>
        </form>
        <div className="table-responsive">


            <table className="table text-start lightGray align-middle table-bordered table-hover mb-0">
                <thead>
                    <tr className="text-white">
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Total Searches</th>

                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.length >= 0 && products.map((val , index) => (

                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{val.productTitle}</td>
                        <td>{val.searchProduct}</td>

                        <td><a className="btn btn-sm bgPrimary text-light" onClick={()=>handleDeleteProduct(val.id)} href="">Delete</a></td>
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

export default HotProduct