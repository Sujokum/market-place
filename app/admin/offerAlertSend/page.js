'use client'
import React , {useState} from 'react'
import { usePathname} from 'next/navigation'
import SideBar from '@/components/Admin/sidebar/SideBar'
import TopNav from '@/components/Admin/topNav/TopNav'
import UpperArrow from '@/components/Admin/upperArrow/UpperArrow'
import MsgSend from '@/components/Admin/msgSend/MsgSend'

const page = () => {
    const params = usePathname()
    const [isOpen, setIsOpen] = useState(false);
   
   

  
    return (
      <div className="container-fluid position-relative d-flex p-0">
        <SideBar params = {params} isOpen = {isOpen} />
        <div className={`content ${isOpen ? 'open' : ''} `}>
  
  <TopNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <MsgSend heading = {'Send Offer Alert'}    sendOffer = {'OfferSend'} />
      </div>
      <UpperArrow/>
      </div>
      )
}

export default page