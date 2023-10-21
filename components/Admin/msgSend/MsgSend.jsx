import axios from 'axios'
import React , {useState} from 'react'


const MsgSend = ({heading , sendOffer }) => {
    const [mailFields , setMailFields] = useState({
        to : '' ,
        subject : '' ,
        text : ''
      })
      const [sendMSG , setSendMSG] = useState({
        offerSend : false,
        MsgSends : false
      })
    const handleSubmit = async ()=>{
        try {

            const params = {
                to : mailFields.to,
                subject : mailFields.subject ,
                text : mailFields.text
            }

            if(sendOffer === 'OfferSend'){

                const res = await axios.post('https://yz9wziqo31.execute-api.eu-north-1.amazonaws.com/master/api/sendOffer' , params)
                if(res.status === 200){
                    setMailFields({
                        to : '' ,
                        subject : '' ,
                        text : ''
                      }) 
                      setSendMSG({
                        offerSend : true,
                        MsgSends : false
                    })           
                }
                
            }else{
            const res = await axios.post('https://yz9wziqo31.execute-api.eu-north-1.amazonaws.com/master/api/sendMessage' , params)
            if(res.status === 200){
                setMailFields({
                    to : '' ,
                    subject : '' ,
                    text : ''
                  }) 
                  setSendMSG({
                    offerSend : false,
                    MsgSends : true
                })           
            }

            }

        } catch (error) {
            console.log(error)
        }
    }

  return ( 
    <div className="container-fluid pt-4 px-4">
    <div className="row vh-100 bgSecondary rounded align-items-center justify-content-center mx-0">
        <div className="col-sm-12">
            <div>


                <div className="bgSecondary rounded h-100 p-4">
                    <h6 className="mb-4 text-light ">{heading}</h6>
                    <div className="form mb-3">
                        <label className='lightGray mb-2'>To</label>
                        <input type="email" className="form-control border-0 bgDark lightGray " 
                            placeholder="name@example.com" onChange={(e)=>setMailFields({...mailFields , to : e.target.value})} value={mailFields.to} />
                    </div>
                    <div className="form mb-3">
                        <label className='lightGray mb-2'>Subject</label>
                        <input type="text" className="form-control border-0 bgDark lightGray" 
                            placeholder="Subject" onChange={(e)=>setMailFields({...mailFields , subject : e.target.value})} value={mailFields.subject} />
                    </div>

                    <div className="form">
                        <label className='lightGray mb-2 ' >Description (Send Email)</label>
                        <textarea className="form-control  border-0 bgDark lightGray" onChange={(e)=>setMailFields({...mailFields , text : e.target.value})} value={mailFields.text} placeholder="Leave a comment here"
                            style={{height: '150px'}}></textarea>
                          { sendMSG.offerSend &&  <small className='text-success' >Offer Send Successfully</small> }
                          { sendMSG.MsgSends &&  <small className='text-success' >Message Send Successfully</small> }
                    </div>
                    <button  onClick={handleSubmit} className="btn bgPrimary text-light mt-4">Add Product</button>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default MsgSend